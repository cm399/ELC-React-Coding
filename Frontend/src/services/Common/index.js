import { get } from "../serverConfig";

function findData(searchval) {
  return get(`?searchVal=${searchval}`, {});
}

const CommonService = {
  findData,
};

export default CommonService;
