export type Task = {
    id: number;
    title: string;
    note?: string;
    isCompleted: boolean;
    currentPomodoro: number;
    totalPomodoros: number;
}
