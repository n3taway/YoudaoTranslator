declare var tjs

import Translator from './translator';

const main = async () => {
  const translator = new Translator(tjs.getenv('key'), tjs.getenv('secret'), tjs.getenv('platform'));

  const word: string = Array.from(tjs.args).pop() as string;

  // case
  // YOUDAO_TRANSLATOR 英语
  // TELÉFONO 西班牙语言

  // 移除特殊字符，转为小写翻译

  // /Users/<username>/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows

  const result = await translator.translate(word.replace(/_/g, ' ').toLocaleLowerCase());

  console.log(result);
}

main();