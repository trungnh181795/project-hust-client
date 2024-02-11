'use client'
/* Libs */
import { Box, Grid, Typography } from '@mui/material'
import {
  Item,
  PageContent,
  PageHeader,
  PageTitle,
  PageWrapper,
} from '@/components/elastic'
// import DynamicChart from '@/components/common/DynamicChart'
/* Components */

export default function Dashboard() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle type="header" title={'Dashboard'} />
      </PageHeader>
      <PageContent>
        <Grid container spacing={4} sx={{ px: 2 }}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6}></Grid>
              {/* ************************************ */}
              <Grid item xs={12} sm={12} md={6}></Grid>
            </Grid>
          </Grid>
          {/* ************************************ */}
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6}>
                <Item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '24px',
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div">
                      Gender
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      Customers that use our service
                    </Typography>
                  </Box>
                  {/* <div style={{ maxWidth: '50%' }}>
                    <DynamicChart size="big" dataType="gender" />
                  </div> */}
                </Item>
              </Grid>
              {/* ************************************ */}
              <Grid item xs={12} sm={12} md={6}>
                <Item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '24px',
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div">
                      Disease
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      Customers that use our service
                    </Typography>
                  </Box>
                  {/* <div style={{ maxWidth: '50%' }}>
                    <DynamicChart size="big" dataType="disease" />
                  </div> */}
                </Item>
              </Grid>
            </Grid>
          </Grid>
          {/* ************************************ */}
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={3}>
                <Item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '24px',
                  }}
                >
                  <Typography variant="h5" component="div">
                    Anxiety
                  </Typography>
                  {/* <div style={{ maxWidth: '100%' }}>
                    <DynamicChart size="small" disease="anxiety" />
                  </div> */}
                </Item>
              </Grid>
              {/* ************************************ */}
              <Grid item xs={12} sm={12} md={3}>
                <Item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '24px',
                  }}
                >
                  <Typography variant="h5" component="div">
                    Depression
                  </Typography>
                  {/* <div style={{ maxWidth: '100%' }}>
                    <DynamicChart size="small" disease="depression" />
                  </div> */}
                </Item>
              </Grid>
              {/* ************************************ */}
              <Grid item xs={12} sm={12} md={3}>
                <Item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '24px',
                  }}
                >
                  <Typography variant="h5" component="div">
                    ADHD
                  </Typography>
                  {/* <div style={{ maxWidth: '100%' }}>
                    <DynamicChart size="small" disease="ADHD" />
                  </div> */}
                </Item>
              </Grid>
              {/* ************************************ */}
              <Grid item xs={12} sm={12} md={3}>
                <Item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '24px',
                  }}
                >
                  <Typography variant="h5" component="div">
                    Isomia
                  </Typography>
                  {/* <div style={{ maxWidth: '100%' }}>
                    <DynamicChart size="small" disease="isomia" />
                  </div> */}
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PageContent>
    </PageWrapper>
  )
}
