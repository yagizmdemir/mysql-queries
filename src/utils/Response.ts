export interface IResponseValue {
  readonly data: any;
  readonly message: any;
  readonly limit: any;
  readonly page: any;
}

export class Response implements IResponseValue {
  public readonly data: any;
  public readonly message: any;
  public readonly limit: any;
  public readonly page: any;

  constructor(data = null, message = null, limit = 25, page = 1) {
    this.data = data;
    this.message = message;
    this.limit = limit;
    this.page = page;
  }
  success(res: any) {
    return res.status(200).json({
      status: 200,
      success: true,
      message: this.message ?? 'Success',
      data: this.data,
    });
  }
  list(res: any) {
    return res.status(200).json({
      status: 200,
      success: true,
      message: this.message ?? 'Success',
      pageLimit: this.limit,
      page: this.page,
      data: this.data,
    });
  }
  created(res: any) {
    return res.status(201).json({
      status: 201,
      success: true,
      message: this.message ?? 'Success',
      data: this.data,
    });
  }
  error500(res: any) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: 'Server internal error',
    });
  }
  error400(res: any) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: this.message ?? 'Something went wrong',
    });
  }
  error401(res: any) {
    return res.status(401).json({
      status: 401,
      success: false,
      message: this.message ?? '401 Unauthorized',
    });
  }
  error404(res: any) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: this.message ?? '404 not found',
    });
  }
  error429(res: any) {
    return res.status(429).json({
      status: 429,
      success: false,
      message: 'Request limit exceeded',
    });
  }
}
