export const auxData = {
  "Refrigerador": {
      "Ano": {
          "-NPoN6zqz5OXe3WFvfsO": 2023,
          "-NPoNMgp17Z5FiVfSvb6": 2023,
          "-NPoNbDAQzqtAclgUlzw": 2023,
          "-NPoNrG81dyk8y7uJSk_": 2023,
          "-NPoO5Udzn90TF2taLUN": 2023,
          "-NPoOKjTgwWcKewfmTEG": 2023
      },
      "Dia": {
          "-NPoN6ZrtsqM3Snc2Ug5": 5,
          "-NPoNMKprRMJiGMLW6pK": 5,
          "-NPoNb23pXr8dKYZYYQ_": 5,
          "-NPoNr6VvbfZNqb9gvym": 5,
          "-NPoO5KrG0JZiE9G6oHn": 5,
          "-NPoOKbZC2YqAhV2gWKB": 5
      },
      "Hora": {
          "-NPoN6PeHUV5UDTdMdfU": 20,
          "-NPoNM9eWTcXt4IgAghw": 20,
          "-NPoNatDg5As078k-sr5": 20,
          "-NPoNqxsHWV-JArU2ZJQ": 20,
          "-NPoO5BWwAq0d2mP6qzl": 20,
          "-NPoOKT-zrG55WC03U6F": 20
      },
      "Mes": {
          "-NPoN6dXDIlhwYFdRUik": 3,
          "-NPoNMbeiEFLY0PYbA4S": 3,
          "-NPoNb82y-RclzMRUNfJ": 3,
          "-NPoNrBGBZ5sPPT5tJfX": 3,
          "-NPoO5Q0p8jIoIlBOxx-": 3,
          "-NPoOKf1RkycMo-dG0nZ": 3
      },
      "Minutos": {
          "-NPoN6UPS-paplUonfcE": 44,
          "-NPoNMG18Vd3IF-bR3jl": 45,
          "-NPoNaypKl4swF5218YL": 46,
          "-NPoNr1o_RQtYD_xqupg": 47,
          "-NPoO5EaHKF5e49da_wG": 48,
          "-NPoOKXgFNlbOGtfD0a-": 49
      },
      "TThe1": {
          "-NPoN6B19tHc3tKqVOIW": -45.17746,
          "-NPoNLgh7fpTzPNO6grN": -45.17746,
          "-NPoNadQMExv3VNq8beQ": -45.17746,
          "-NPoNqjMOvw688wnazBL": -45.17746,
          "-NPoO4zyzlOXzTNEsjUO": -45.17746,
          "-NPoOKDLzJrYGaFDRV2d": -45.17746
      },
      "TThe2": {
          "-NPoN6G3PwynpvmbklDD": 27.16047,
          "-NPoNLlm15bnkH9mTcx3": 47.29617,
          "-NPoNaiiX58u12-s5wgP": 26.20317,
          "-NPoNqp1I5LYt0EJuL6j": 122.19866,
          "-NPoO55XsI4KjWFUDC7F": 28.80013,
          "-NPoOKJx93fhGI40yJN2": 112.6882
      },
      "TThe3": {
          "-NPoN6KzDjdt1YDOxtba": 25.22219,
          "-NPoNLrVeJFkzGOSQQl7": 25.25302,
          "-NPoNaoGgl962ogApHEK": 25.16496,
          "-NPoNqtmOabIImK2P5zA": 25.16496,
          "-NPoO58ipaQhWLF7Qpvb": 25.19137,
          "-NPoOKOkHII-TqQdi_nF": 25.15176
      }
  }
}


export const formatData = (data) => {
  const finalData = data ?? auxData

  if (finalData) {
    return {
      year: [...Object.values(finalData?.Refrigerador?.Ano ?? {})],
      month: [...Object.values(finalData?.Refrigerador?.Mes ?? {})],
      day: [...Object.values(finalData?.Refrigerador?.Dia ?? {})],
      hours: [...Object.values(finalData?.Refrigerador?.Hora ?? {})],
      t1: [...Object.values(finalData?.Refrigerador?.TThe1 ?? {})],
      t2: [...Object.values(finalData?.Refrigerador?.TThe2 ?? {})],
      t3: [...Object.values(finalData?.Refrigerador?.TThe3 ?? {})]
    }
  }

  return {}
}