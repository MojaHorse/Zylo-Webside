import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export type LogSeverity = 'info' | 'warning' | 'error' | 'critical';

/**
 * Gets consistent browser/device info
 */
function getBrowserInfo() {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        platform: navigator.platform
    };
}

/**
 * Permanent Logger for the Web App
 * Logs errors directly to Firebase Firestore for permanent audit trailing.
 */
export async function logError(
    error: any,
    context: string,
    severity: LogSeverity = 'error',
) {
    try {
        const payload = {
            device_info: getBrowserInfo(),
            error_context: context,
            error_message: error instanceof Error ? error.message : String(error),
            stack_trace: error instanceof Error ? error.stack : null,
            severity,
            created_at: new Date().toISOString()
        };

        // Push to Firestore
        await addDoc(collection(db, "system_error_logs"), payload);

    } catch (loggerErr) {
        // Fallback: If the logging system itself fails, log to console.
        console.error("FATAL LOGGER ERROR:", loggerErr);
        console.error("Original error that failed to log:", error);
    }
}
