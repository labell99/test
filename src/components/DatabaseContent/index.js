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
import { useState, useEffect } from "react";
import axios from 'axios';

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

 const [data, setData] = useState([]);

 useEffect(() => {
    axios.post('http://54.198.204.54:1337/auth/local', {
      identifier: 'lee_abell@hotmail.com',
      password: 'Test123!',
    }).then(resp => {

      var authtoken = "Bearer " + resp.data.jwt;
	  const headers = {
        'Authorization': authtoken,
        'accept': 'application/json'
      };

      axios.get(`http://54.198.204.54:1337/ids`, { headers })
        .then(response => {

        var resultsets = response.data;

        var UsersArray = [];
        for (let i = 0; i < resultsets.length; i++) {
          var name = resultsets[i].VaccineName;
          var recordNumber = resultsets[i].RecordNumber;
          var vaccineType = resultsets[i].VaccineType;
          var vaccineApplication = resultsets[i].VaccineApplication;
          var vaccineTarget = resultsets[i].VaccineTarget;
          var Emergence = resultsets[i].Emergence;
          var shortName = resultsets[i].ntShortName;
          var longName = resultsets[i].ntLongName;
          var fTarget = resultsets[i].FACTATarget;
          var fGenome = resultsets[i].FACTAGenome;
          var sVariants = resultsets[i].SpikeVariants;
          var oVariants = resultsets[i].OtherVariants;
          var PANGO = resultsets[i].PANGO;
		  var BVBRC = resultsets[i].BVBRC;
          var AminoAcid = resultsets[i].AminoAcid;
          var Conserved = resultsets[i].Conserved;
          var VariantTargets = resultsets[i].VariantTargets;
          var Description = resultsets[i].Description;
          var Category = resultsets[i].Category;
		  var Type = resultsets[i].Type;
          var Subcategory = resultsets[i].Subcategory;
          var IPReference = resultsets[i].IPReference;
          var Phenotypes = resultsets[i].Phenotypes;
          var PublicationSource = resultsets[i].PublicationSource;
          var REFlinks = resultsets[i].REFlinks;
		  var Users = resultsets[i].Users;
          var Notes = resultsets[i].Notes;
          var Notes2 = resultsets[i].Notes;

          var UserArray = [];
          UserArray.push(recordNumber);
          UserArray.push(name);
          UserArray.push(vaccineType);
          UserArray.push(vaccineApplication);
          UserArray.push(vaccineTarget);
          UserArray.push(Emergence);
          UserArray.push(shortName);
          UserArray.push(longName);
          UserArray.push(fTarget);
          UserArray.push(fGenome);
          UserArray.push(sVariants);
          UserArray.push(oVariants);
          UserArray.push(PANGO);
          UserArray.push(BVBRC);
          UserArray.push(AminoAcid);
          UserArray.push(Conserved);
          UserArray.push(VariantTargets);
          UserArray.push(Description);
          UserArray.push(Category);
          UserArray.push(Type);
          UserArray.push(Subcategory);
          UserArray.push(IPReference);
          UserArray.push(Phenotypes);
          UserArray.push(PublicationSource);
          UserArray.push(REFlinks);
          UserArray.push(Users);
          UserArray.push(Notes);
          UserArray.push(Notes2);
          UsersArray.push(UserArray);
        }

        console.log("mount: ",UsersArray);
        setData(UsersArray);
      })
      .catch(error => {
        // handle error
        console.log(error);
        if (error.response.status == 401) {
          alert("Authentication Error! Please login again");
        }
      });
    });
  }, []);


const columns = [
 {
  name: "Record Number",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "Name",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Application",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Target",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Emergence",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Nucliotide ShortName",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Nucliotide LongName",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Target",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Genome",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Spike Variants",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Other Variants",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "PANGO",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "BVBRC",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Amino Acid",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Conserved",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Variant Targets",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Description",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Category",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Subcategory",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "IPReference",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Phenotypes",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Source",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "REFlinks",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Users",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Notes",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Source Note (SIB)",
  options: {
   filter: true,
   sort: false,
  }
 },
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
