import React, { useEffect, useState } from "react";
import Box from "@mui/material/Grid";
import CardSearchCenter from "./card-search-center";


const SearchCenter = ({ resultSearchCenter, BloodType }) => {
    return (
        <Box>
            {resultSearchCenter.map((user, index) => {
                return (
                    BloodType === "A+" ?
                        <CardSearchCenter
                            nameSearch={user.data.name}
                            CountBloodType={user.data["A+"]}
                            bloodType={BloodType}
                            neighborhood={user.data.neighborhood}
                            sx={{ margin: "10px", p: 2 }}
                            key={index} /> :
                        BloodType === "B+" ?
                            <CardSearchCenter
                                nameSearch={user.data.name}
                                bloodType={BloodType}
                                CountBloodType={user.data["B+"]}
                                neighborhood={user.data.neighborhood}
                                sx={{ margin: "10px", p: 2 }}
                                key={index} /> :
                            BloodType === "AB+" ?
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    CountBloodType={user.data["AB+"]}
                                    bloodType={BloodType}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                    key={index} /> :
                            BloodType === "O+" ?
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["O+"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                        key={index} /> :
                            BloodType === "AB-" ?
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["AB-"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                    key={index} /> :
                            BloodType === "O-" ?
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["O-"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                    key={index} /> :
                            BloodType === "A-" ?
                                <CardSearchCenter
                                    nameSearch={user.data.name}
                                    bloodType={BloodType}
                                CountBloodType={user.data["A-"]}
                                    neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                    key={index} /> :
                            BloodType === "B-" ?
                                <CardSearchCenter
                                      nameSearch={user.data.name}
                                      bloodType={BloodType}
                                CountBloodType={user.data["B-"]}
                                      neighborhood={user.data.neighborhood}
                                    sx={{ margin: "10px", p: 2 }}
                                    key={index} /> 
                            : ""
                       );
             } )    }
        </Box>
    );
}
export default SearchCenter;