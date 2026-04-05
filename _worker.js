// Cloudflare Pages Worker - 简单路由
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 如果是API请求，转发到后端Worker
    if (url.pathname.startsWith('/api/')) {
      return fetch(`https://bloomberg-logos-api.c0f61ea72c61e9fe89784410d40b56b9.workers.dev${url.pathname}`, request);
    }
    
    // 否则返回静态文件
    return env.ASSETS.fetch(request);
  }
};