import api from '../../index';
import { IForum } from "../../../Interfaces/Forum.interface"

class ForumData {
  index() {
    return api.get<IForum[]>('forum');
  }
}

export default new ForumData();

