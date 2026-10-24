import type { Res } from "../types/types";

const sendResponsee = <T>(
  res: Res,
  {
    message,
    data,
    error,
  }: {
    message: string;
    data?: T;
    error?: boolean;
  },
  status = 200
) => {
res.writeHead(status,{"Content-type":"application/json"})
res.end(JSON.stringify({
    success :error ? false : true,
    message : message,
    data : error ? null : data
}))
};

export default sendResponsee;