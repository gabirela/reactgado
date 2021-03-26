import api from '../../index';
import { ILogin } from "../../../Interfaces/Login.interface"

class ForumData {
  index() {
    return api.get<ILogin[]>('login');
  }
}

export default new ForumData();