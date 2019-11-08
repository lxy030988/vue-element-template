import request from "@/utils/request";

export function getUser(data) {
  return request({
    url: "/verify-login",
    method: "get",
    data
  });
}
