const fs = require(`fs`);
const path = require(`path`);

/**
 * Пользователь
 *
 * @typedef User
 * @type Object
 * @property {string} id Идентификатор
 * @property {string} name Имя
 * @property {string} surname Фамилия
 * @property {string} avatar Аватар
 * @property {string} role Роль
 */

class UsersRepositoryReadFileError extends Error {}
class UsersRepositoryUserNotFoundError extends Error {}

/**
 * @readonly
 * @type {string}
 */
const FIXTURES_PATH = path.resolve(__dirname, `./users.repository.fixtures.json`);

class UsersRepository {
  /**
   * @type {UsersRepository | null}
   */
  static instance = null;

  /**
   * @return {UsersRepository | void}
   */
  constructor() {
    if (UsersRepository.instance !== null) {
      return UsersRepository.instance;
    }

    /**
     * @private
     * @type {User[] | null}
     */
    this._users = null;

    UsersRepository.instance = this;
  }

  /**
   * @public
   * @return {User[]}
   */
  readUsers = () => {
    return this.users;
  }

  /**
   * @public
   * @param {string} userId
   * @return {User}
   * @throws {UsersRepositoryUserNotFoundError}
   */
  readUser = (userId) => {
    /**
     * @readonly
     * @type {User}
     */
    const user = this.users.find(
        /**
         * @param {User} user
         * @return {boolean}
         */
        ({id: currentUserId}) => currentUserId === userId
    );

    if (user === undefined) {
      throw new UsersRepositoryUserNotFoundError(`User with ID '${userId}' not found`);
    }

    return user;
  }

  /**
   * @private
   * @return {User[]}
   * @throws {UsersRepositoryReadFileError}
   */
  get users() {
    if (this._users === null) {
      try {
        const buffer = fs.readFileSync(FIXTURES_PATH);

        this._users = JSON.parse(buffer.toString());
      } catch {
        throw new UsersRepositoryReadFileError(`Failed to read file with fixtures`);
      }
    }

    return this._users;
  }

  /**
   * @private
   * @param {User[] | null} users
   * @return {void}
   */
  set users(users) {
    this._users = users;
  }
}

module.exports = {UsersRepository, UsersRepositoryUserNotFoundError};
