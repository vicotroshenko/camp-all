interface IPayload {
    [x: string]: string;
}
declare const createToken: (payload: IPayload) => string;
export default createToken;
