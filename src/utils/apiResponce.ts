export const successResponse = (data: any, message = '',metadata:Metadata|null=null) => {
	return {
		isSuccess: true,
		message,
		data,
		...metadata
	};
};
export const errorResponse = (message: string, data: any = []) => {
	return {
		isSuccess: false,
		message,
		data,
	};
};
export const PaginatedResponse = (data: any, totalCount: number, message = '') => {
	return {
		isSuccess: true,
		message,
		data,
		totalCount,
	};
};
export interface Metadata {
	pageIndex:number,
	pageSize:number,
	totalCount:number	
}