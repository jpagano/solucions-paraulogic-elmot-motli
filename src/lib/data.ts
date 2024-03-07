const base = import.meta.env.BASE_URL

import {getBrowserInstance} from "@/lib/browser";

export const games:Games[] = [
  {
    name: 'Paraulògic',
    href: `${base}paraulogic`
  },
  {
    name: 'El Mot',
    href: `${base}elmot`
  },
  {
    name: 'Mot-li',
    href: `${base}motli`
  }
]

async function getGameSolution(url: string, extractDataFn: { (): any; (): { letters: any; words: any; }; (): any; }) {
  let browser = null;
  try {
    browser = await getBrowserInstance();
    const page = await browser.newPage();
    await page.goto(url);

    return await page.evaluate(extractDataFn);
  } catch (error) {
    return error;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}

export async function getElmotSolutions() {
  const url = 'https://gelozp.com/games/elmot/';
  const extractDataFn = () => {
    const data = localStorage.getItem('wordle.state.D');
    if (data) {
      const { solution } = JSON.parse(data);
      return solution;
    }
    return null;
  };

  return getGameSolution(url, extractDataFn);
}

export async function getParaulogicSolutions() {
  const url = 'https://vilaweb.cat/paraulogic/';
  const extractDataFn = () => {
    // @ts-ignore
    const { l, p } = t;
    return { letters: l, words: p };
  };

  return getGameSolution(url, extractDataFn);
}

export async function getMotliSolutions() {
  const url = 'https://www.vilaweb.cat/mot-li/api/games/current';
  const extractDataFn = () => {
    const { game } = JSON.parse(document.body.innerText);
    return game.word;
  };

  return getGameSolution(url, extractDataFn);
}
