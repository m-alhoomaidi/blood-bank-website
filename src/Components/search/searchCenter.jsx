import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardSearchCenter from "./card-search-center";


const SearchCenter = ({ resultSearchCenter, BloodType }) => {
    return (
        <Grid
        container
        spacing={3}
        sx={{
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
            {resultSearchCenter.map((user, index) => {
                return (
                    BloodType === "A+" ?
                    <Grid item xs={10} md={3.5} key={index}>
                        <CardSearchCenter
                            nameSearch={user.data.name}
                            CountBloodType={user.data["A+"]}
                            bloodType={BloodType}
                            neighborhood={user.data.neighborhood}
                            sx={{ margin: "10px", p: 2 }}
                            /></Grid> :
                        BloodType === "B+" ?
                        <Grid item xs={10} md={3.5} key={index}>
                            <CardSearchCenter
                                nameSearch={user.data.name}
                                bloodType={BloodType}
                                CountBloodType={user.data["B+"]}
                                neighborhood={user.data.neighborhood}
                                sx={{ margin: "10px", p: 2 }}
                                /></Grid> :
                            BloodType === "AB+" ?
                            <Grid item xs={10} md={3.5} key={index}>
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    CountBloodType={user.data["AB+"]}
                                    bloodType={BloodType}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                     /> </Grid>:
                            BloodType === "O+" ?
                            <Grid item xs={10} md={3.5} key={index}>
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["O+"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                         /></Grid> :
                            BloodType === "AB-" ?
                            <Grid item xs={10} md={3.5} key={index}>
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["AB-"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                     /></Grid> :
                            BloodType === "O-" ?
                            <Grid item xs={10} md={3.5} key={index}>
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["O-"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                   /></Grid> :
                            BloodType === "A-" ?
                            <Grid item xs={10} md={3.5} key={index}>
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["A-"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                     /> </Grid>:
                            BloodType === "B-" ?
                            <Grid item xs={10} md={3.5} key={index}>
                                <CardSearchCenter
                                      nameSearch={user.data.name}
                                      bloodType={BloodType}
                                CountBloodType={user.data["B-"]}
                                      neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                     /></Grid> 
                            : ""
                       );
             } )    }
        </Grid>
    );
}
export default SearchCenter;