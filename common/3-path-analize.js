// #3 Анализ строки
const path = "/users/download/index.html"

const isHtml = path => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);

  return pathExt === requiredExt
}

console.log('#3 Анализ строки: ', isHtml(path));