export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-navy-950 z-[9999]">
            <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full border-[5px] border-blue-200 border-t-[#4a74b3] animate-spin"></div>

                <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide">
                    Loading...
                </p>
            </div>
        </div>
    );
}