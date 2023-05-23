import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#5F8D8590" }}>
      <Image
        source={require("../../../assets/logo_gyozilla.png")}
        style={{
          marginTop: 10,
          height: 280,
          resizeMode: "contain",
          width: "100%",
        }}
      />
      <Card
        style={{
          backgroundColor: "#CDE8E7",
          borderColor: "black",
          borderWidth: 1,
          margin: 20,
          padding: 10,
          elevation: 20,
          shadowColor: "black",
        }}
      >
        <Card.Content style={{ margin: 10 }}>
          <Paragraph
            style={{
              fontSize: 20,
              textAlign: "justify",
              color: "#F8A500",
              lineHeight: 30,
            }}
          >
            GYOZILLA est un fast-food asiatique, situé à Amiens. Venez découvrir
            la gastronomie japonaise et chinoise sur place ou tout simplement
            depuis chez vous. Nos livreurs sont équipés d'un terminal de
            paiement par CB. Modes de paiement acceptés : Carte Bancaire,
            espèces et Ticket Restaurant. Nous n'acceptons pas les chèques.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default HomeScreen;
