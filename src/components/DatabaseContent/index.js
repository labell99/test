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
