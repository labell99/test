import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'
import { Container } from '@material-ui/core';

function CreatePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
		  <Container maxWidth="md" style={{ margin: '1rem auto' }}>
		   test

		  </Container>
		</Layout>
	)
}
CreatePage.propTypes = {
	location: PropTypes.object,
}
export default CreatePage
