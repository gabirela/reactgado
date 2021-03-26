import api from '../../index';
import { IUser } from "../../../Interfaces/User.interface"

class ForumData {
  index() {
    return api.get<IUser[]>('Usuario');
  }
  
  
}

export default new ForumData();