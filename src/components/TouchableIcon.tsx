import React, {useContext} from "react";
import {TouchableOpacity} from "react-native";
import {colors} from "../theme/appTheme";
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from "../context/AuthContext";

interface iconProps {
    iconName: string
}

export const TouchableIcon = ( { iconName }: iconProps ) => {

    const { changeFavoriteIcon } = useContext( AuthContext );

    return (
        <TouchableOpacity
            onPress={ () => changeFavoriteIcon( iconName ) }
        >
            <Icon
                name={ iconName }
                size={ 80 }
                color={ colors.primary } />
        </TouchableOpacity>
    )
}
