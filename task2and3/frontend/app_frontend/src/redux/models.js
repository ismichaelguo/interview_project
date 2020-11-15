import { Model,attr } from "redux-orm";


export class User extends Model {
  static get fields() {
    return {
      id: attr(),
      firstName: attr(),
      lastName: attr(),
      email: attr(),
      age: attr(),
      income: attr(),
    };
  }

  static reducer(action, User, session) {
    console.log("11111",action)
    switch (action.type) {
      case "CREATE_USER":
        User.create(action.payload);

        break;
    }
    // Return value is ignored.
  }
}
User.modelName = "User";
