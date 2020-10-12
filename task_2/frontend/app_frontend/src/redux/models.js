import { Model } from "redux-orm";

export class User extends Model {
  static reducer(action, User, session) {
    switch (action.type) {
      case "CREATE_USER":
        User.create(action.payload);

        break;
    }
    // Return value is ignored.
    return User;
  }
}
User.modelName = "User";
