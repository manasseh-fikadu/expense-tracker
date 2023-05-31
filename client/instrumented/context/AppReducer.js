function cov_q14pvc424() {
  var path = "C:\\Users\\minas\\Documents\\expense-tracker-mern\\expense-tracker\\client\\src\\context\\AppReducer.js";
  var hash = "1c97cb0a0b1d360ce4160bce526af77c8627e727";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\minas\\Documents\\expense-tracker-mern\\expense-tracker\\client\\src\\context\\AppReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "1": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 9,
          column: 7
        }
      },
      "2": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 14,
          column: 7
        }
      },
      "3": {
        start: {
          line: 13,
          column: 63
        },
        end: {
          line: 13,
          column: 97
        }
      },
      "4": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 19,
          column: 7
        }
      },
      "5": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "6": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 32,
          column: 7
        }
      },
      "7": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 37,
          column: 7
        }
      },
      "8": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "9": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 48,
          column: 7
        }
      },
      "10": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 55,
          column: 7
        }
      },
      "11": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 15
          },
          end: {
            line: 2,
            column: 16
          }
        },
        loc: {
          start: {
            line: 2,
            column: 34
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 48
          },
          end: {
            line: 13,
            column: 49
          }
        },
        loc: {
          start: {
            line: 13,
            column: 63
          },
          end: {
            line: 13,
            column: 97
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 4,
            column: 4
          },
          end: {
            line: 9,
            column: 7
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
            column: 7
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 19,
            column: 7
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 24,
            column: 7
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 32,
            column: 7
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 37,
            column: 7
          }
        }, {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 43,
            column: 7
          }
        }, {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 48,
            column: 7
          }
        }, {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
            column: 7
          }
        }, {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 57,
            column: 19
          }
        }],
        line: 3
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1c97cb0a0b1d360ce4160bce526af77c8627e727"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_q14pvc424 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_q14pvc424();
// eslint-disable-next-line import/no-anonymous-default-export
export default ((state, action) => {
  cov_q14pvc424().f[0]++;
  cov_q14pvc424().s[0]++;
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      cov_q14pvc424().b[0][0]++;
      cov_q14pvc424().s[1]++;
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };
    case 'DELETE_TRANSACTION':
      cov_q14pvc424().b[0][1]++;
      cov_q14pvc424().s[2]++;
      return {
        ...state,
        transactions: state.transactions.filter(transaction => {
          cov_q14pvc424().f[1]++;
          cov_q14pvc424().s[3]++;
          return transaction._id !== action.payload;
        })
      };
    case 'ADD_TRANSACTION':
      cov_q14pvc424().b[0][2]++;
      cov_q14pvc424().s[4]++;
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case 'TRANSACTION_ERROR':
      cov_q14pvc424().b[0][3]++;
      cov_q14pvc424().s[5]++;
      return {
        ...state,
        error: action.payload
      };
    case 'LOGIN_SUCCESS':
      cov_q14pvc424().b[0][4]++;
      cov_q14pvc424().s[6]++;
      return {
        ...state,
        loading: false,
        isLogged: true,
        users: action.payload,
        name: action.payload.name
      };
    case 'GET_FAIL':
      cov_q14pvc424().b[0][5]++;
      cov_q14pvc424().s[7]++;
      return {
        ...state,
        error: action.payload
      };
    case 'ADD_USER':
      cov_q14pvc424().b[0][6]++;
      cov_q14pvc424().s[8]++;
      return {
        ...state,
        isLogged: true,
        users: [...state.users, action.payload]
      };
    case 'REGISTER_FAIL':
      cov_q14pvc424().b[0][7]++;
      cov_q14pvc424().s[9]++;
      return {
        ...state,
        error: action.payload
      };
    case 'LOGOUT':
      cov_q14pvc424().b[0][8]++;
      cov_q14pvc424().s[10]++;
      return {
        ...state,
        isLogged: false,
        users: [],
        name: null
      };
    default:
      cov_q14pvc424().b[0][9]++;
      cov_q14pvc424().s[11]++;
      return state;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsb2FkaW5nIiwidHJhbnNhY3Rpb25zIiwicGF5bG9hZCIsImZpbHRlciIsInRyYW5zYWN0aW9uIiwiX2lkIiwiZXJyb3IiLCJpc0xvZ2dlZCIsInVzZXJzIiwibmFtZSJdLCJzb3VyY2VzIjpbIkFwcFJlZHVjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0dFVF9UUkFOU0FDVElPTlMnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSAnREVMRVRFX1RSQU5TQUNUSU9OJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0cmFuc2FjdGlvbnM6IHN0YXRlLnRyYW5zYWN0aW9ucy5maWx0ZXIodHJhbnNhY3Rpb24gPT4gdHJhbnNhY3Rpb24uX2lkICE9PSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgfVxyXG4gICAgY2FzZSAnQUREX1RSQU5TQUNUSU9OJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0cmFuc2FjdGlvbnM6IFsuLi5zdGF0ZS50cmFuc2FjdGlvbnMsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgICB9XHJcbiAgICBjYXNlICdUUkFOU0FDVElPTl9FUlJPUic6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ0xPR0lOX1NVQ0NFU1MnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkOiB0cnVlLFxyXG4gICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lXHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ0dFVF9GQUlMJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSAnQUREX1VTRVInOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkOiB0cnVlLFxyXG4gICAgICAgIHVzZXJzOiBbLi4uc3RhdGUudXNlcnMsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgICB9XHJcbiAgICBjYXNlICdSRUdJU1RFUl9GQUlMJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSAnTE9HT1VUJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcnM6IFtdLFxyXG4gICAgICAgIG5hbWU6IG51bGxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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