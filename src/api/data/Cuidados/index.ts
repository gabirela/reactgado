import api from '../../index';
import { ICuidados } from "../../../Interfaces/Cuidados.interface"

class ForumData {
  index() {
    return api.get<ICuidados[]>('cuidados');
  }
}

export default new ForumData();