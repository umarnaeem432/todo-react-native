import React from "react";
import { Toast } from "native-base";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.todos}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                Toast.show({
                  text: item.title,
                  buttonText: "Ok"
                });
              }}
            >
              <View style={styles.listItem}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    // borderColor: '#000000',
    // borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 10
  },

  listItem: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 20,
    shadowColor: "#cccccc",
    marginVertical: 5,
    elevation: 2
  }
});
