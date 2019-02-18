# angular7-springboot

Domain

Real Estate

Problem - Real state agent (seller agent) can't operation in isolation. No one will come to particular agent and ask for real estates.


Solution - Platform where any seller as well as real estate agents also can share their real estates information to prospective buyers.
This provide following solutions
1. If property owner want to sell a property they can contact an agent via the platform or sell directly (selling directly will also making competition high)
2. Seller or agent can post ad on the platform with pricing information
3. Buyer can come and search for properties - by location, by type of property and price
4. They can use social login


Type of users

SELLERS (SELLER ROLE IS PLAYED BY AGENT ALSO)
BUYERS (BUYER CAN ALSO BE A SELLER)


LOGIN URL
https://localhost:8443/oauth2/authorize/google



BUILD FRONEND
mvn clean install

BUILD BACKEND
mvn clean install

RUN BACKEND
RUN MainApplication class from IDE
or
mvn clean install spring-boot:run

Google Social Config (tmnuwan12@gmail.com)
https://console.developers.google.com/apis/credentials?project=real-estate-231904&authuser=0
