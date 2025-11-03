import { Context } from 'edgeone-pages';

export default async function handler(req: Request, ctx: Context) {
  const url = new URL(req.url);

  // 根路径 → 直接返回 home.html 内容
  if (url.pathname === '/' || url.pathname === '') {
    const home = await fetch(new URL('/home.html', req.url));
    return new Response(await home.text(), {
      headers: { 'Content-Type': 'text/html' }
    });
  }

  // 其他路径正常
  return fetch(req);
}
