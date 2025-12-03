import * as React from "react";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogBackdrop,
    Description,
} from "@headlessui/react";
import { cn } from "./utils"; // Убедитесь, что путь правильный
import { buttonVariants } from "./button"; // Убедитесь, что путь правильный

// 1. Создаем контекст, чтобы имитировать поведение Radix (Trigger управляет Dialog)
const AlertDialogContext = React.createContext<{
    open: boolean;
    setOpen: (open: boolean) => void;
} | null>(null);

function useAlertDialog() {
    const context = React.useContext(AlertDialogContext);
    if (!context) {
        throw new Error("AlertDialog components must be used within an AlertDialog");
    }
    return context;
}

// --- Root ---
function AlertDialog({
                         open: controlledOpen,
                         onOpenChange,
                         children,
                         ...props
                     }: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}) {
    const [internalOpen, setInternalOpen] = React.useState(false);

    // Логика для поддержки и контролируемого, и неконтролируемого состояния
    const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setOpen = React.useCallback(
        (value: boolean) => {
            if (onOpenChange) {
                onOpenChange(value);
            } else {
                setInternalOpen(value);
            }
        },
        [onOpenChange]
    );

    return (
        <AlertDialogContext.Provider value={{ open, setOpen }}>
            {children}
        </AlertDialogContext.Provider>
    );
}

// --- Trigger ---
function AlertDialogTrigger({
                                className,
                                children,
                                asChild, // Headless UI не имеет asChild, но мы оставим проп для совместимости интерфейса
                                ...props
                            }: React.HTMLAttributes<HTMLElement> & { asChild?: boolean }) {
    const { setOpen } = useAlertDialog();

    // Простая реализация: по клику открываем
    return (
        <div
            className={className}
            onClick={(e) => {
                setOpen(true);
                props.onClick?.(e as any);
            }}
            {...props}
        >
            {children}
        </div>
    );
}

// --- Portal ---
// В Headless UI портал встроен в Dialog, поэтому этот компонент — просто обертка-пустышка
// для совместимости с вашим текущим кодом.
function AlertDialogPortal({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

// --- Overlay (Backdrop) ---
// В Headless UI v2 анимации делаются через CSS data-[closed]
function AlertDialogOverlay({
                                className,
                                ...props
                            }: React.ComponentProps<typeof DialogBackdrop>) {
    return (
        <DialogBackdrop
            transition
            className={cn(
                "fixed inset-0 z-50 bg-black/50 transition-opacity duration-200 ease-in-out data-[closed]:opacity-0",
                className
            )}
            {...props}
        />
    );
}

// --- Content ---
function AlertDialogContent({
                                className,
                                children,
                                ...props
                            }: React.ComponentProps<typeof DialogPanel>) {
    const { open, setOpen } = useAlertDialog();

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            className="relative z-50"
        >
            {/* Overlay рендерится здесь, так как в Radix структура была другой,
          но в Headless UI они должны быть соседями внутри Dialog */}
            <AlertDialogOverlay />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <DialogPanel
                    transition
                    className={cn(
                        "bg-background w-full max-w-lg rounded-lg border p-6 shadow-lg duration-200 ease-in-out",
                        // Анимации появления/исчезновения
                        "data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-y-2",
                        "transition-all transform",
                        className
                    )}
                    {...props}
                >
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    );
}

// --- Header, Footer (Остаются обычными div) ---
function AlertDialogHeader({
                               className,
                               ...props
                           }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
            {...props}
        />
    );
}

function AlertDialogFooter({
                               className,
                               ...props
                           }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
                className
            )}
            {...props}
        />
    );
}

// --- Title ---
function AlertDialogTitle({
                              className,
                              ...props
                          }: React.ComponentProps<typeof DialogTitle>) {
    return (
        <DialogTitle
            className={cn("text-lg font-semibold", className)}
            {...props}
        />
    );
}

// --- Description ---
function AlertDialogDescription({
                                    className,
                                    ...props
                                }: React.ComponentProps<typeof Description>) {
    return (
        <Description
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    );
}

// --- Action (Кнопка подтверждения) ---
function AlertDialogAction({
                               className,
                               onClick,
                               ...props
                           }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { setOpen } = useAlertDialog();

    return (
        <button
            className={cn(buttonVariants(), className)}
            onClick={(e) => {
                // Выполняем действие
                onClick?.(e);
                // Закрываем диалог (обычное поведение для Action)
                setOpen(false);
            }}
            {...props}
        />
    );
}

// --- Cancel (Кнопка отмены) ---
function AlertDialogCancel({
                               className,
                               onClick,
                               ...props
                           }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { setOpen } = useAlertDialog();

    return (
        <button
            className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
            onClick={(e) => {
                onClick?.(e);
                setOpen(false);
            }}
            {...props}
        />
    );
}

export {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};