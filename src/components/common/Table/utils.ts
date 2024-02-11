import type { Order, TableRowType } from './types'

export function descendingComparator(a: TableRowType, b: TableRowType, orderBy: string) {
    const valAToComp = a.cells.find(cell => cell.identifier === orderBy)!
    const valBToComp = b.cells.find(cell => cell.identifier === orderBy)!

    if (valBToComp.data < valAToComp.data) {
        return -1;
    }
    if (valBToComp.data > valAToComp.data) {
        return 1;
    }
    return 0;
}

export function getComparator(
    order: Order,
    orderBy: string,
): (
    a: TableRowType,
    b: TableRowType,
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
