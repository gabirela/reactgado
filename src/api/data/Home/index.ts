import api from '../../index';
import { IHome } from "../../../Interfaces/Home.interface"

class ForumData {
  index() {
    return api.get<IHome[]>('home');
  }
}

export default new ForumData();