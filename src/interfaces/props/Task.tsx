export default interface Props {
    id: number;
    doneAt: string;
    estimateAt: string;
    onDelete?: (idItem:number) => void;
    onToggleTask?: (idItem:number) => void;
    onChangeText?:() => void;
    desc: string;
};