import { Avatar } from '@/components/base'
import { typography } from '@/config'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const MessageLeft = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Avatar
          alt="test"
          src="/images/doctor-ava.png"
          width="40px"
          height="40px"
        ></Avatar>

        <Box
          sx={{
            position: 'relative',
            marginLeft: '20px',
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: '#F4F4F4',

            width: 'fit-content',
            maxWidth: '60%',
            //height: "50px",
            textAlign: 'left',
            borderRadius: '10px',
          }}
        >
          <Stack>
            <Typography
              className={typography.pc.s4}
              sx={{ padding: 0, margin: 0 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              tenetur dolorum cupiditate perspiciatis nostrum voluptate, impedit
              repellat perferendis voluptatibus explicabo dignissimos ipsam
              distinctio molestiae laudantium accusamus totam enim in eligendi?
            </Typography>
          </Stack>
          <Typography
            textAlign="right"
            className={typography.pc.descReg}
            sx={{}}
          >
            Timestamp Test
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export const MessageRight = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Stack
        sx={{
          position: 'relative',
          marginRight: '20px',
          marginBottom: '10px',
          padding: '10px',
          backgroundColor: '#6C5DD3',
          width: '60%',
          //height: "50px",
          textAlign: 'left',
          borderRadius: '10px',
        }}
      >
        <Typography className={typography.pc.s4} sx={{ padding: 0, margin: 0 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          tenetur dolorum cupiditate perspiciatis nostrum voluptate, impedit
          repellat perferendis voluptatibus explicabo dignissimos ipsam
          distinctio molestiae laudantium accusamus totam enim in eligendi?
        </Typography>
        <Typography textAlign="right" className={typography.pc.descReg}>
          Timestamp Test
        </Typography>
      </Stack>
    </Box>
  )
}
