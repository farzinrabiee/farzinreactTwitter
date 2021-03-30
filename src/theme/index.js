import {createMuiTheme} from "@material-ui/core";

export const Theme=createMuiTheme({
    palette:{
      primary:{
          main:"#5ea8dc"
      }
    },

    overrides:{
        MuiTypography:{
          root:{
              fontFamily:'Shabnam !important'

            }

        }
    }




})