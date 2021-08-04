import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

function CreatePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content />
			test
		</Layout>
	)
}
CreatePage.propTypes = {
	location: PropTypes.object,
}
export default CreatePage
