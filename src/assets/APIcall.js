import axios from "axios";

class MasterService {

    post = (url, data) => {
        return new Promise(resolve =>
          axios
            .post(`${url}`, data,{
              //xDomainRequest:true,
              //withCredentials:true,
              headers: { "Content-Type":  "text/plain" }
            })
            .then(res => {
              console.log(res);
            })
            .catch(function(error) {
              console.log(error);
            })
        );
      };

}

export default new MasterService();