import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import RefreshIcon from '@material-ui/icons/Refresh'
import TabBar from 'components/TabBar'
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";

const styles = theme => ({
	paper: {
		maxWidth: 936,
		margin: 'auto',
		overflow: 'hidden',
	},
	contentWrapper: {
		margin: '40px 16px',
	},
	container: {
		padding: '48px 36px 0',
	},
})


function DatabaseContent({ classes }) {


 componentDidMount() {
    axios.post('http://54.198.204.54:1337/auth/local', {
      identifier: 'lee_abell@hotmail.com',
      password: 'Test123!',
    })

    var authtoken = "Bearer " + resp.data.jwt;
	const headers = {
        'Authorization': authtoken,
        'accept': 'application/json'
    };

    axios.get(`http://54.198.204.54:1337/ids`, { headers })
      .then(response => {
        /* USER data is received here ! */
        var resultsets = response.data;
        console.log("mount: ",resultsets);
        /* var UsersArray = [];
        for (let i = 0; i < resultsets.length; i++) {
          var fullName =
            resultsets[i].first_name + " " + resultsets[i].last_name;
          var contactNum = resultsets[i].mobile_number;
          var email = resultsets[i].email;
          var lastName = resultsets[i].last_name;
          var userKey = resultsets[i].user_key;

          var UserArray = [];
          UserArray.push(fullName);
          UserArray.push(contactNum);
          UserArray.push(email);
          UserArray.push(lastName);
          UserArray.push(userKey);

          UsersArray.push(UserArray);
        }

        this.setState({
          data: UsersArray
        }); */
      })
      .catch(error => {
        // handle error
        console.log(error);
        if (error.response.status == 401) {
          alert("Authentication Error! Please login again");
        }
      });
  }


	    const columns = [
	      "Name",
	      "Record Number",
	      "Type",
	      "Application",
	      "Target",
	      "Emergence",
	      "Nucliotide ShortName",
	      "Nucliotide LongName",
	      "Target",
	      "Genome",
	      "Spike Variants",
	      "Other Variants",
	      "PANGO",
	      "BVBRC",
	      "Amino Acid",
	      "Conserved",
	      "Variant Targets",
	      "Description",
	      "Category",
	      "Type",
	      "Subcategory",
	      "IPReference",
	      "Phenotypes",
	      "Source",
	      "REFlinks",
	      "Users",
	      "Notes",
	      "Source Note (SIB)"
	    ];

	    const data = [
	      "Name",
	      "Contact",
	      "Email",
	      "LastName",
	      "User Key",
	      "Action"
	    ];

	    const options = {
	      filterType: "dropdown",
	      responsive: "stacked"
        };
	return (
		<>
			<div className={classes.container}>
				<Paper className={classes.paper}>
					<div className={classes.contentWrapper}>
						<Typography color="textSecondary" align="center">
							 <MUIDataTable
							    title={"Immunogen Design & Selection"}
							    data={data}
							    columns={columns}
							    options={options}
                             />
						</Typography>
					</div>
				</Paper>
			</div>
		</>
	)
}

DatabaseContent.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DatabaseContent)
