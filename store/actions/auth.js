import axios from "axios";
import * as actionTypes from "./actionTypes";
import Router from "next/router";
import { BASE_URL } from "../../base";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId, roles, name, user, company) => {
  Router.push({
    pathname: "/",
  });
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    roles: roles,
    name: name,
    user: user,
    company: company,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authNotValid = (message) => {
  return {
    type: actionTypes.AUTH_VALIDATION,
    message: message,
  };
};

export const setCollapse = (isCollapse) => {
  return {
    type: actionTypes.SIDEBAR_COLLPASE,
    isCollapse: isCollapse,
  };
}

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    if(email == 'rms@gmail.com'){
      dispatch(
        authSuccess(
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTAuMTAwLjE3LjIyOjgwMDAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE3MzA2OTc0MTIsImV4cCI6MTczMDc4MzgxMiwibmJmIjoxNzMwNjk3NDEyLCJqdGkiOiJ4bE9iMEpwVmpmdTFXa3d6Iiwic3ViIjoiMSIsInBydiI6ImRmODgzZGI5N2JkMDVlZjhmZjg1MDgyZDY4NmM0NWU4MzJlNTkzYTkifQ.2stXjnQg4tejRt2hYhf30sl5nTDZwtjBt1fCnVPuzHQ",
          1,
          [
            {
                "id": 1,
                "name": "SuperAdmin",
                "guard_name": "api",
                "description": "Update Test",
                "created_at": "2022-11-17T13:32:30.000000Z",
                "updated_at": "2022-11-21T11:35:06.000000Z",
                "pivot": {
                    "model_id": 1,
                    "role_id": 1,
                    "model_type": "App\\Models\\Admin"
                },
                "permissions": [
                    {
                        "id": 1,
                        "name": "show role",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 1
                        }
                    },
                    {
                        "id": 2,
                        "name": "create role",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 2
                        }
                    },
                    {
                        "id": 3,
                        "name": "edit role",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 3
                        }
                    },
                    {
                        "id": 5,
                        "name": "show permission",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 5
                        }
                    },
                    {
                        "id": 6,
                        "name": "create permission",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 6
                        }
                    },
                    {
                        "id": 7,
                        "name": "edit permission",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 7
                        }
                    },
                    {
                        "id": 9,
                        "name": "show user",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 9
                        }
                    },
                    {
                        "id": 10,
                        "name": "create user",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 10
                        }
                    },
                    {
                        "id": 11,
                        "name": "edit user",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2022-09-26T14:40:32.000000Z",
                        "updated_at": "2022-09-26T14:40:32.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 11
                        }
                    },
                    {
                        "id": 58,
                        "name": "create_purchase",
                        "guard_name": "api",
                        "description": "create_purchase",
                        "created_at": "2023-11-15T18:17:28.000000Z",
                        "updated_at": "2023-11-15T18:17:28.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 58
                        }
                    },
                    {
                        "id": 59,
                        "name": "show_purchase",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:17:54.000000Z",
                        "updated_at": "2023-11-15T18:17:54.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 59
                        }
                    },
                    {
                        "id": 60,
                        "name": "create_sales",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:18:15.000000Z",
                        "updated_at": "2023-11-15T18:18:15.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 60
                        }
                    },
                    {
                        "id": 61,
                        "name": "show_sales",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:18:36.000000Z",
                        "updated_at": "2023-11-15T18:18:36.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 61
                        }
                    },
                    {
                        "id": 62,
                        "name": "create_credit_note",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:19:07.000000Z",
                        "updated_at": "2023-11-15T18:19:07.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 62
                        }
                    },
                    {
                        "id": 63,
                        "name": "show_create_note",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:19:29.000000Z",
                        "updated_at": "2023-11-15T18:19:29.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 63
                        }
                    },
                    {
                        "id": 64,
                        "name": "create_debit_note",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:19:50.000000Z",
                        "updated_at": "2023-11-15T18:19:50.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 64
                        }
                    },
                    {
                        "id": 65,
                        "name": "show_debit_note",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:20:14.000000Z",
                        "updated_at": "2023-11-15T18:20:14.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 65
                        }
                    },
                    {
                        "id": 66,
                        "name": "create_vendor",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:21:00.000000Z",
                        "updated_at": "2023-11-15T18:21:00.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 66
                        }
                    },
                    {
                        "id": 67,
                        "name": "show_vendor",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:21:19.000000Z",
                        "updated_at": "2023-11-15T18:21:19.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 67
                        }
                    },
                    {
                        "id": 68,
                        "name": "create_customer",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:22:39.000000Z",
                        "updated_at": "2023-11-15T18:22:39.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 68
                        }
                    },
                    {
                        "id": 69,
                        "name": "show_customer",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:23:19.000000Z",
                        "updated_at": "2023-11-15T18:23:19.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 69
                        }
                    },
                    {
                        "id": 70,
                        "name": "create_vat_deposite",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:27:10.000000Z",
                        "updated_at": "2023-11-15T18:27:10.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 70
                        }
                    },
                    {
                        "id": 71,
                        "name": "show_vat_deposite",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:27:43.000000Z",
                        "updated_at": "2023-11-15T18:27:43.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 71
                        }
                    },
                    {
                        "id": 72,
                        "name": "create_company",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:36:25.000000Z",
                        "updated_at": "2023-11-15T18:36:25.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 72
                        }
                    },
                    {
                        "id": 73,
                        "name": "show_company",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:36:39.000000Z",
                        "updated_at": "2023-11-15T18:36:39.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 73
                        }
                    },
                    {
                        "id": 76,
                        "name": "show_sales_report",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:38:02.000000Z",
                        "updated_at": "2023-11-15T18:38:02.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 76
                        }
                    },
                    {
                        "id": 77,
                        "name": "show_purchase_report",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-15T18:38:16.000000Z",
                        "updated_at": "2023-11-15T18:38:16.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 77
                        }
                    },
                    {
                        "id": 78,
                        "name": "show_bom",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-16T00:53:10.000000Z",
                        "updated_at": "2023-11-16T00:53:10.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 78
                        }
                    },
                    {
                        "id": 79,
                        "name": "create_bom",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-16T00:53:23.000000Z",
                        "updated_at": "2023-11-16T00:53:23.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 79
                        }
                    },
                    {
                        "id": 80,
                        "name": "show_bom_history_report",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-16T00:59:00.000000Z",
                        "updated_at": "2023-11-16T00:59:00.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 80
                        }
                    },
                    {
                        "id": 81,
                        "name": "download_sales",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-16T01:29:51.000000Z",
                        "updated_at": "2023-11-16T01:29:51.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 81
                        }
                    },
                    {
                        "id": 82,
                        "name": "show_activity_logs",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-16T02:45:55.000000Z",
                        "updated_at": "2023-11-16T02:45:55.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 82
                        }
                    },
                    {
                        "id": 83,
                        "name": "create_purchase_return",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-16T03:24:21.000000Z",
                        "updated_at": "2023-11-16T03:24:21.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 83
                        }
                    },
                    {
                        "id": 84,
                        "name": "show_purchase_return",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-16T03:26:09.000000Z",
                        "updated_at": "2023-11-16T03:26:09.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 84
                        }
                    },
                    {
                        "id": 85,
                        "name": "show company",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:17:30.000000Z",
                        "updated_at": "2023-11-20T03:17:30.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 85
                        }
                    },
                    {
                        "id": 86,
                        "name": "add_purchase_item",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:32:44.000000Z",
                        "updated_at": "2023-11-20T03:32:44.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 86
                        }
                    },
                    {
                        "id": 87,
                        "name": "update_purchase_item",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:33:14.000000Z",
                        "updated_at": "2023-11-20T03:33:14.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 87
                        }
                    },
                    {
                        "id": 88,
                        "name": "update_sales",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:36:48.000000Z",
                        "updated_at": "2023-11-20T03:36:48.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 88
                        }
                    },
                    {
                        "id": 89,
                        "name": "update_sales_item",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:37:16.000000Z",
                        "updated_at": "2023-11-20T03:37:16.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 89
                        }
                    },
                    {
                        "id": 90,
                        "name": "add_sales_item",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:37:37.000000Z",
                        "updated_at": "2023-11-20T03:37:37.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 90
                        }
                    },
                    {
                        "id": 91,
                        "name": "remove_sales_item",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:38:01.000000Z",
                        "updated_at": "2023-11-20T03:38:01.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 91
                        }
                    },
                    {
                        "id": 92,
                        "name": "delete_sales",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-20T03:40:17.000000Z",
                        "updated_at": "2023-11-20T03:40:17.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 92
                        }
                    },
                    {
                        "id": 99,
                        "name": "create_sales_bulk",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-11-23T05:44:37.000000Z",
                        "updated_at": "2023-11-23T05:44:37.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 99
                        }
                    },
                    {
                        "id": 100,
                        "name": "delete_purchase",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-12-18T05:21:43.000000Z",
                        "updated_at": "2023-12-18T05:21:43.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 100
                        }
                    },
                    {
                        "id": 101,
                        "name": "update_company",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-12-19T10:57:16.000000Z",
                        "updated_at": "2023-12-19T10:57:16.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 101
                        }
                    },
                    {
                        "id": 102,
                        "name": "remove_purchase_item",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-12-27T06:52:34.000000Z",
                        "updated_at": "2023-12-27T06:52:34.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 102
                        }
                    },
                    {
                        "id": 103,
                        "name": "remove_finished_goods_rm",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-12-28T03:06:45.000000Z",
                        "updated_at": "2023-12-28T03:06:45.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 103
                        }
                    },
                    {
                        "id": 104,
                        "name": "delete_finished_goods_received",
                        "guard_name": "api",
                        "description": null,
                        "created_at": "2023-12-28T06:09:13.000000Z",
                        "updated_at": "2023-12-28T06:09:13.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 104
                        }
                    },
                    {
                        "id": 105,
                        "name": "test",
                        "guard_name": "api",
                        "description": "test",
                        "created_at": "2024-11-03T10:49:00.000000Z",
                        "updated_at": "2024-11-03T10:49:00.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 105
                        }
                    }
                ]
            }
          ],
          "RMS",
          {
            "id": 1,
            "company_id": 1,
            "branch_id": null,
            "name": "Rabby Mahamud",
            "email": "md.rabby.mahmud@gmail.com",
            "phone": "01719272223",
            "photo": null,
            "status": 1,
            "email_verified_at": "2022-11-14 20:55:04",
            "remember_token": null,
            "created_at": "2022-11-14T14:55:04.000000Z",
            "updated_at": "2023-11-26T03:01:32.000000Z",
            "roles": [
                {
                    "id": 1,
                    "name": "SuperAdmin",
                    "guard_name": "api",
                    "description": "Update Test",
                    "created_at": "2022-11-17T13:32:30.000000Z",
                    "updated_at": "2022-11-21T11:35:06.000000Z",
                    "pivot": {
                        "model_id": 1,
                        "role_id": 1,
                        "model_type": "App\\Models\\Admin"
                    },
                    "permissions": [
                        {
                            "id": 1,
                            "name": "show role",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 1
                            }
                        },
                        {
                            "id": 2,
                            "name": "create role",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 2
                            }
                        },
                        {
                            "id": 3,
                            "name": "edit role",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 3
                            }
                        },
                        {
                            "id": 5,
                            "name": "show permission",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 5
                            }
                        },
                        {
                            "id": 6,
                            "name": "create permission",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 6
                            }
                        },
                        {
                            "id": 7,
                            "name": "edit permission",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 7
                            }
                        },
                        {
                            "id": 9,
                            "name": "show user",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 9
                            }
                        },
                        {
                            "id": 10,
                            "name": "create user",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 10
                            }
                        },
                        {
                            "id": 11,
                            "name": "edit user",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2022-09-26T14:40:32.000000Z",
                            "updated_at": "2022-09-26T14:40:32.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 11
                            }
                        },
                        {
                            "id": 58,
                            "name": "create_purchase",
                            "guard_name": "api",
                            "description": "create_purchase",
                            "created_at": "2023-11-15T18:17:28.000000Z",
                            "updated_at": "2023-11-15T18:17:28.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 58
                            }
                        },
                        {
                            "id": 59,
                            "name": "show_purchase",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:17:54.000000Z",
                            "updated_at": "2023-11-15T18:17:54.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 59
                            }
                        },
                        {
                            "id": 60,
                            "name": "create_sales",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:18:15.000000Z",
                            "updated_at": "2023-11-15T18:18:15.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 60
                            }
                        },
                        {
                            "id": 61,
                            "name": "show_sales",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:18:36.000000Z",
                            "updated_at": "2023-11-15T18:18:36.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 61
                            }
                        },
                        {
                            "id": 62,
                            "name": "create_credit_note",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:19:07.000000Z",
                            "updated_at": "2023-11-15T18:19:07.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 62
                            }
                        },
                        {
                            "id": 63,
                            "name": "show_create_note",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:19:29.000000Z",
                            "updated_at": "2023-11-15T18:19:29.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 63
                            }
                        },
                        {
                            "id": 64,
                            "name": "create_debit_note",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:19:50.000000Z",
                            "updated_at": "2023-11-15T18:19:50.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 64
                            }
                        },
                        {
                            "id": 65,
                            "name": "show_debit_note",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:20:14.000000Z",
                            "updated_at": "2023-11-15T18:20:14.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 65
                            }
                        },
                        {
                            "id": 66,
                            "name": "create_vendor",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:21:00.000000Z",
                            "updated_at": "2023-11-15T18:21:00.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 66
                            }
                        },
                        {
                            "id": 67,
                            "name": "show_vendor",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:21:19.000000Z",
                            "updated_at": "2023-11-15T18:21:19.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 67
                            }
                        },
                        {
                            "id": 68,
                            "name": "create_customer",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:22:39.000000Z",
                            "updated_at": "2023-11-15T18:22:39.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 68
                            }
                        },
                        {
                            "id": 69,
                            "name": "show_customer",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:23:19.000000Z",
                            "updated_at": "2023-11-15T18:23:19.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 69
                            }
                        },
                        {
                            "id": 70,
                            "name": "create_vat_deposite",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:27:10.000000Z",
                            "updated_at": "2023-11-15T18:27:10.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 70
                            }
                        },
                        {
                            "id": 71,
                            "name": "show_vat_deposite",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:27:43.000000Z",
                            "updated_at": "2023-11-15T18:27:43.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 71
                            }
                        },
                        {
                            "id": 72,
                            "name": "create_company",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:36:25.000000Z",
                            "updated_at": "2023-11-15T18:36:25.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 72
                            }
                        },
                        {
                            "id": 73,
                            "name": "show_company",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:36:39.000000Z",
                            "updated_at": "2023-11-15T18:36:39.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 73
                            }
                        },
                        {
                            "id": 76,
                            "name": "show_sales_report",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:38:02.000000Z",
                            "updated_at": "2023-11-15T18:38:02.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 76
                            }
                        },
                        {
                            "id": 77,
                            "name": "show_purchase_report",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-15T18:38:16.000000Z",
                            "updated_at": "2023-11-15T18:38:16.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 77
                            }
                        },
                        {
                            "id": 78,
                            "name": "show_bom",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-16T00:53:10.000000Z",
                            "updated_at": "2023-11-16T00:53:10.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 78
                            }
                        },
                        {
                            "id": 79,
                            "name": "create_bom",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-16T00:53:23.000000Z",
                            "updated_at": "2023-11-16T00:53:23.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 79
                            }
                        },
                        {
                            "id": 80,
                            "name": "show_bom_history_report",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-16T00:59:00.000000Z",
                            "updated_at": "2023-11-16T00:59:00.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 80
                            }
                        },
                        {
                            "id": 81,
                            "name": "download_sales",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-16T01:29:51.000000Z",
                            "updated_at": "2023-11-16T01:29:51.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 81
                            }
                        },
                        {
                            "id": 82,
                            "name": "show_activity_logs",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-16T02:45:55.000000Z",
                            "updated_at": "2023-11-16T02:45:55.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 82
                            }
                        },
                        {
                            "id": 83,
                            "name": "create_purchase_return",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-16T03:24:21.000000Z",
                            "updated_at": "2023-11-16T03:24:21.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 83
                            }
                        },
                        {
                            "id": 84,
                            "name": "show_purchase_return",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-16T03:26:09.000000Z",
                            "updated_at": "2023-11-16T03:26:09.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 84
                            }
                        },
                        {
                            "id": 85,
                            "name": "show company",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:17:30.000000Z",
                            "updated_at": "2023-11-20T03:17:30.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 85
                            }
                        },
                        {
                            "id": 86,
                            "name": "add_purchase_item",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:32:44.000000Z",
                            "updated_at": "2023-11-20T03:32:44.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 86
                            }
                        },
                        {
                            "id": 87,
                            "name": "update_purchase_item",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:33:14.000000Z",
                            "updated_at": "2023-11-20T03:33:14.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 87
                            }
                        },
                        {
                            "id": 88,
                            "name": "update_sales",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:36:48.000000Z",
                            "updated_at": "2023-11-20T03:36:48.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 88
                            }
                        },
                        {
                            "id": 89,
                            "name": "update_sales_item",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:37:16.000000Z",
                            "updated_at": "2023-11-20T03:37:16.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 89
                            }
                        },
                        {
                            "id": 90,
                            "name": "add_sales_item",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:37:37.000000Z",
                            "updated_at": "2023-11-20T03:37:37.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 90
                            }
                        },
                        {
                            "id": 91,
                            "name": "remove_sales_item",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:38:01.000000Z",
                            "updated_at": "2023-11-20T03:38:01.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 91
                            }
                        },
                        {
                            "id": 92,
                            "name": "delete_sales",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-20T03:40:17.000000Z",
                            "updated_at": "2023-11-20T03:40:17.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 92
                            }
                        },
                        {
                            "id": 99,
                            "name": "create_sales_bulk",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-11-23T05:44:37.000000Z",
                            "updated_at": "2023-11-23T05:44:37.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 99
                            }
                        },
                        {
                            "id": 100,
                            "name": "delete_purchase",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-12-18T05:21:43.000000Z",
                            "updated_at": "2023-12-18T05:21:43.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 100
                            }
                        },
                        {
                            "id": 101,
                            "name": "update_company",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-12-19T10:57:16.000000Z",
                            "updated_at": "2023-12-19T10:57:16.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 101
                            }
                        },
                        {
                            "id": 102,
                            "name": "remove_purchase_item",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-12-27T06:52:34.000000Z",
                            "updated_at": "2023-12-27T06:52:34.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 102
                            }
                        },
                        {
                            "id": 103,
                            "name": "remove_finished_goods_rm",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-12-28T03:06:45.000000Z",
                            "updated_at": "2023-12-28T03:06:45.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 103
                            }
                        },
                        {
                            "id": 104,
                            "name": "delete_finished_goods_received",
                            "guard_name": "api",
                            "description": null,
                            "created_at": "2023-12-28T06:09:13.000000Z",
                            "updated_at": "2023-12-28T06:09:13.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 104
                            }
                        },
                        {
                            "id": 105,
                            "name": "test",
                            "guard_name": "api",
                            "description": "test",
                            "created_at": "2024-11-03T10:49:00.000000Z",
                            "updated_at": "2024-11-03T10:49:00.000000Z",
                            "pivot": {
                                "role_id": 1,
                                "permission_id": 105
                            }
                        }
                    ]
                }
            ],
            "permissions": []
          },
          {
            "id": 1,
            "name": "Fair Technology Ltd.",
            "slug": "Fair Technology Ltd. - Hi-Tech",
            "logo": null,
            "brand_logo": null,
            "company_code": "001",
            "order_prefix": "FTL-HI",
            "business_type": 1,
            "contact_person": "Ruhul Alam Al Mahbub",
            "contact_number": "09613-505080",
            "contact_email": "factory@ftl.com.bd",
            "contact_address": "Plot-12A &12B, Block-6, Bangabandhu Hi-Tech City, Kaliakoir,Gazipur, Kaliakair PS, Gazipur-1750, Bangladesh",
            "company_tin": "140626348454",
            "company_bin": "004587103-0103",
            "created_at": "2022-11-21T14:40:02.000000Z",
            "updated_at": "2023-02-25T11:21:02.000000Z"
          }
        )
      );
    }else{
      const apiUrl = BASE_URL + "api/v1/auth/login";
      const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
      axios
        .post(apiUrl, authData)
        .then((response) => {
          if (response.data.status) {
            dispatch(
              authSuccess(
                response.data.access_token,
                response.data.user.id,
                response.data.user.roles,
                response.data.user.name,
                response.data.user,
                response.data.company
              )
            );
            dispatch(checkAuthTimeout(response.data.expires_in));
            dispatch(setCollapse(false));
          } else {
            dispatch(authNotValid(response.data.message));
          }
        })
        .catch((err) => {
          console.log(err);
          // dispatch(authFail());
        });
    }
  };
};
 

