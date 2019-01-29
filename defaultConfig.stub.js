/*

Larastrator - Build a nice looking admin panel in a blink

A project by Abdalla Arbab (@abdalla__arbab).

Larastrator is a lightweight admin panel components. it's inspired by
RefactoringUI best practices.

View the full documentation at https://docs.codolog.com/larastrator.


/*
|-------------------------------------------------------------------------------
| Larastrator                              https://docs.codolog.com/larastrator
|-------------------------------------------------------------------------------
|
| Configurations in javascript for manipulating the admin panel look and feel
| using javascript.
|
*/

let ls = {
  'body': {
    'background-color': colors["panel-grey-lightest"],
    'text-color': colors["panel-grey-darker"],
    'font-weight': 400,
  },
  'headings': {
    'text-color': 'inherit',
    'font-weight': 600,
  },
  'selection': {
    'background-color': colors["grey-light"],
    'text-color': 'inherit',
    'text-shadow': 'none',
  },
  'links': {
    'text-color': colors["panel-grey-darker"],
    'transition': 'color 100ms ease',
    'text-decoration': 'none',
    'hover': {
      'text-color': colors["grey-dark"],
      'text-decoration': 'underline',
    },
  },
  'horizonal-rules': {
    'background-color': colors["grey-light"],
  },
  'navbar': {
    'background-color': colors["white"],
    'text-color': 'inherit',
    'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.10)',
    'links': {
      'text-color': colors["panel-grey-darker"],
      'hover': {
        'text-color': colors["grey-dark"],
      },
      'select': {
        'border-bottom': '2px solid ' + colors["grey-dark"],
        'hover': {
          'text-color': colors["panel-grey-darker"],
        },
      },
    },
    'dropdown': {
      'background-color': colors["white"],
      'links': {
        'background-color': colors["transparent"],
        'transition': 'all 100ms ease',
        'text-color': 'inherit',
        'hover': {
          'background-color': colors["grey-light"],
          'text-color': 'inherit',
        }
      },
    }
  },
  'panel': {
    'card': {
      'background-color': colors["white"],
      'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.10)',
    }
  },
  'sidebar': {
    'text-color': 'inherit',
    'menu': {
      'links': {
        'text-color': colors["panel-grey-darker"],
        'border-left': '2px solid ' + colors["grey-light"],
        'hover': {
          'text-color': colors["grey-dark"],
          'border-left': '2px solid ' + colors["grey"],
        },
        'select': {
          'text-color': 'inherit',
          'border-left': '2px solid ' + colors["grey-dark"],
        },
        'icons': {
          'text-color': colors["panel-grey-light"],
          'transition': 'color 100ms ease',
          'hover': {
            'text-color': colors["grey-dark"],
          },
          'select': {
            'text-color': colors["grey-dark"],
          },
        },
      },
      'dropdown': {
        'links': {
          'text-color': colors["panel-grey-darker"],
          'border-left': '2px solid ' + colors["grey-light"],
          'hover': {
            'text-color': colors["grey-dark"],
            'border-left': '2px solid ' + colors["grey"],
          },
          'select': {
            'text-color': 'inherit',
            'border-left': '2px solid ' + colors["grey-dark"],
          },
        },
      },
    },
  },
  'breadcrumb': {
    'text-color': colors["panel-grey-darker"],
    'transition': 'color 100ms ease',
    'text-decoration': 'none',
    'hover': {
      'text-color': colors["grey-dark"],
      'text-decoration': 'none',
    },
    'select': {
      'text-color': colors["grey-dark"],
    }
  },
  'forms': {
    'text': {
      'background-color': colors["white"],
      'text-color': 'inherit',
      'border': '1px solid ' + colors["panel-grey-light"],
      'transition': 'all 200ms ease',
      'disabled': {
        'background-color': colors["input-grey-lightest"],
      }
    },
    'textarea': {
      'background-color': colors["white"],
      'text-color': 'inherit',
      'border': '1px solid ' + colors["panel-grey-light"],
      'transition': 'box-shadow 200ms ease',
      'disabled': {
        'background-color': colors["input-grey-lightest"],
      }
    },
    'select': {
      'background-color': colors["white"],
      'text-color': 'inherit',
      'border': '1px solid ' + colors["panel-grey-light"],
      'transition': 'all 200ms ease',
      'disabled': {
        'background-color': colors["input-grey-lightest"],
      },
      'checked': {
        'background-color': colors["grey-dark"] + ' linear-gradient(0deg, ' + colors["grey-dark"] + ' 0%, ' + colors["grey-dark"] + ' 100%)',
        'font-weight': 600,
      },
    },
    'file': {
      'background-color': colors["button-grey-dark"],
      'text-color': 'inherit',
      'transition': 'all 200ms ease',
      'font-weight': 600,
      'hover': {
        'background-color': colors["button-grey"],
      }
    },
    'error': {
      'text-color': colors["red-dark"],
    },
  },
  'buttons': {
    'default': {
      'background-color': colors["button-grey-dark"],
      'text-color': 'inherit',
      'transition': 'all 200ms ease',
      'font-weight': 600,
      'hover': {
        'background-color': colors["button-grey"],
      }
    },
    'success': {
      'background-color': colors["panel-green-darker"],
      'hover': {
        'background-color': colors["panel-green-dark"],
      }
    },
    'danger': {
      'background-color': colors["panel-red-darker"],
      'hover': {
        'background-color': colors["panel-red-dark"],
      }
    },
    'info': {
      'background-color': colors["panel-teal-darker"],
      'hover': {
        'background-color': colors["panel-teal-dark"],
      }
    },
    'warning': {
      'background-color': colors["button-yellow-darker"],
      'hover': {
        'background-color': colors["button-yellow-dark"],
      }
    },
  },
  'pagination': {
    'select': {
      'background-color': colors["button-grey-darker"],
    }
  },
  'notifications': {
    'background-color': colors["black"],
    'text-color': colors["white"],
    'box-shadow': '0 0px 8px black',
  },
  'alerts': {
    'success': {
      'border-top': '0.3rem solid ' + colors["panel-green-darkest"],
      'title': {
        'text-color': colors["panel-green-darkest"],
      },
      'icon': {
        'text-color': colors["panel-green-darker"],
      },
    },
    'danger': {
      'border-top': '0.3rem solid ' + colors["panel-red-darkest"],
      'title': {
        'text-color': colors["panel-red-darkest"],
      },
      'icon': {
        'text-color': colors["panel-red-darker"],
      },
    },
    'info': {
      'border-top': '0.3rem solid ' + colors["panel-teal-darkest"],
      'title': {
        'text-color': colors["panel-teal-darkest"],
      },
      'icon': {
        'text-color': colors["panel-teal-darker"],
      },
    },
    'warning': {
      'border-top': '0.3rem solid ' + colors["button-yellow-darkest"],
      'title': {
        'text-color': colors["button-yellow-darkest"],
      },
      'icon': {
        'text-color': colors["button-yellow-darker"],
      },
    },
  },
  'tables': {
    'background-color': colors["grey-lighter"],
    'text-color': colors["grey-darker"],
    'border-radius': '0.25em',
    'header-and-footer': {
      'background-color': colors["panel-grey-lighter"],
      'text-color': colors["grey-darker"],
      'font-weight': 600,
    },
    'header': {
      'border-bottom': '2px solid ' + colors["grey"],
    },
    'row': {
      'border-bottom': '1px solid ' + colors["grey"],
    },
    'footer': {
      'border-top': '2px solid ' + colors["grey"],
    },
  },
  'datatables': {
    'background-color': colors["grey-lighter"],
    'text-color': colors["grey-darker"],
    'border-radius': '0.25em',
    'disabled': {
      'text-color': colors["datatable-grey"],
    },
    'selection-count': {
      'background-color': colors["datatable-yellow-light"],
      'text-color': colors["datatable-yellow"],
    },
    'header': {
      'background-color': colors["panel-grey-lighter"],
      'border': '2px solid ' + colors["grey"],
    },
    'column': {
      'line-number-and-checkbox': {
        'background-color': colors["panel-grey-lighter"],
        'border': '1px solid ' + colors["grey"],
      },
    },
    'input': {
      'text': {
        'background-color': colors["white"],
        'text-color': 'inherit',
        'border': '1px solid ' + colors["panel-grey-light"],
        'transition': 'all 200ms ease',
      },
      'select': {
        'background-color': colors["white"],
        'text-color': 'inherit',
        'border': '1px solid ' + colors["panel-grey-light"],
        'transition': 'all 200ms ease',
      }
    },
    'rtl': {
      'column': {
        'line-number-and-checkbox': {
          'border-left': '1px solid ' + colors["grey"],
        },
      },
    },
    'row': {
      'border-bottom': '1px solid ' + colors["grey"],
      'hover': {
        'background-color': colors["grey-light"],
      },
    },
    'select-count': {
      'background-color': colors["panel-grey-lighter"],
    },
  },
}

// module.exports = {