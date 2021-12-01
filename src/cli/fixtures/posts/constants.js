const path = require(`path`);

const DATE_MAX_UNIX_TIME_STAMP = Date.now();
const ONE_MONTH_UNIX_TIME_STAMP = 2670658033;
const DATE_MIN_UNIX_TIME_STAMP = DATE_MAX_UNIX_TIME_STAMP - ONE_MONTH_UNIX_TIME_STAMP * 3;

const TEXT_SENTENCES_MIN_AMOUNT = 5;
const TEXT_SENTENCES_MAX_AMOUNT = 5;
const CATEGORIES_MIN_AMOUNT = 1;
const CATEGORIES_MAX_AMOUNT = 3;
const COMMENTS_MIN_AMOUNT = 0;
const COMMENTS_MAX_AMOUNT = 5;

const TEXT_SENTENCES_PATH = path.resolve(__dirname, `./text-sentences.txt`);
const TITLES_PATH = path.resolve(__dirname, `./titles.txt`);
const IMAGES_URLS_PATH = path.resolve(__dirname, `./images-urls.txt`);

module.exports = {
  DATE_MAX_UNIX_TIME_STAMP,
  DATE_MIN_UNIX_TIME_STAMP,
  TEXT_SENTENCES_MIN_AMOUNT,
  TEXT_SENTENCES_MAX_AMOUNT,
  CATEGORIES_MIN_AMOUNT,
  CATEGORIES_MAX_AMOUNT,
  COMMENTS_MIN_AMOUNT,
  COMMENTS_MAX_AMOUNT,
  TEXT_SENTENCES_PATH,
  TITLES_PATH,
  IMAGES_URLS_PATH,
};