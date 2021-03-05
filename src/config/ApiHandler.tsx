import { METHODS } from "http";
import * as conf from "./Config";

class ApiHandler {





}
const getResult = (
  url,
  method = "GET",
  data: any = null,
  success = (response: any) => { },
  failed = (error: any) => { }
) => {
  let parameters: any = {};
  parameters.method = method;
  if (data) {
    parameters.body = data;
  }
  parameters.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    fetch(conf.apiUrl + url, parameters)
      .then((response) => response.json())
      .then((res) => {
        success(res);
      })
      .catch((error) => {
        failed(error);
      });
  } catch (error) {
    failed(error);
  }
};
export const signin = (
  userName,
  password,
  success = (response: any) => { },
  failed = (error: any) => { }
) => {
  if (!userName || !password) {
    failed("not found");
    return;
  }


  success({ id: "941sdd55assa522", token: "dsfscddvdfvdvdvfdve51ds16ds" });
  const formData = new FormData();
  formData.append("username", userName);
  formData.append("password", password);
  getResult("/login/", "POST", formData, (response) => {
    if (response.status === 200) {
      success(response);
    } else {
      failed(response);
    }
  });
};

export const getVolunteer =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/volunteer", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const getContact =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/contact", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const getDonatedeails  =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/donate", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }
