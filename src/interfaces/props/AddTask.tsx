import TaskRequest from '../response/Task'

export default interface Props {
    onSave: (task: TaskRequest) => void;
    isVisible?: boolean;
    onCancel: () => void;
}