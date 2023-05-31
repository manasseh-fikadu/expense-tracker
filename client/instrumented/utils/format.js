function cov_2g1f5ycztn() {
  var path = "C:\\Users\\minas\\Documents\\expense-tracker-mern\\expense-tracker\\client\\src\\utils\\format.js";
  var hash = "5ab12c553a9baa6af84cdca27a68131eae4d854a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\minas\\Documents\\expense-tracker-mern\\expense-tracker\\client\\src\\utils\\format.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "numberWithCommas",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1,
            column: 36
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5ab12c553a9baa6af84cdca27a68131eae4d854a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2g1f5ycztn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2g1f5ycztn();
export function numberWithCommas(x) {
  cov_2g1f5ycztn().f[0]++;
  cov_2g1f5ycztn().s[0]++;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJudW1iZXJXaXRoQ29tbWFzIiwieCIsInRvU3RyaW5nIiwicmVwbGFjZSJdLCJzb3VyY2VzIjpbImZvcm1hdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XHJcbiAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLE9BQU8sU0FBU0EsZ0JBQWdCLENBQUNDLENBQUMsRUFBRTtFQUFBO0VBQUE7RUFDbEMsT0FBT0EsQ0FBQyxDQUFDQyxRQUFRLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQztBQUMzRCJ9