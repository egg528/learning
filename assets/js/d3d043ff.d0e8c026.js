"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8643],{2653:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>D,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=a(4848),r=a(8453);const i={title:"JDBC, DataSource \uadf8\ub9ac\uace0 HikariCP",description:"\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["java","db"],date:new Date("2024-05-12T00:00:00.000Z")},o=void 0,s={permalink:"/jdbc-datasource-hikaricp",source:"@site/blog/jdbc-datasource-hikaricp.md",title:"JDBC, DataSource \uadf8\ub9ac\uace0 HikariCP",description:"\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4.",date:"2024-05-12T00:00:00.000Z",tags:[{label:"java",permalink:"/tags/java"},{label:"db",permalink:"/tags/db"}],readingTime:9.675,hasTruncateMarker:!0,authors:[{name:"\uad8c\uc6b0\uc11d",title:"Server Developer",url:"https://github.com/egg528",imageURL:"https://avatars.githubusercontent.com/u/62459196?v=4",key:"woosuk"}],frontMatter:{title:"JDBC, DataSource \uadf8\ub9ac\uace0 HikariCP",description:"\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["java","db"],date:"2024-05-12T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Annotation \uae30\ubc18\uc758 ApplicationContext Bean \ub4f1\ub85d \uacfc\uc815 \ud30c\ud5e4\uce58\uae30 (1)",permalink:"/annotation-config-application-context"},nextItem:{title:"\uc138\uc0c1 \ub05d\uc758 \uce74\ud398",permalink:"/the-cafe-on-the-edge-of-the-world"}},c={authorsImageUrls:[void 0]},l=[{value:"JDBC (Java Database Connectivity)",id:"jdbc-java-database-connectivity",level:2},{value:"(1) DriverManager",id:"1-drivermanager",level:3},{value:"(2) DataSource",id:"2-datasource",level:3},{value:"HikariCP",id:"hikaricp",level:2},{value:"(1) Pooling \uae30\ubc95",id:"1-pooling-\uae30\ubc95",level:3},{value:"(2) Delegates \ucd5c\uc801\ud654",id:"2-delegates-\ucd5c\uc801\ud654",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}];function d(n){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsxs)(e.strong,{children:["\u2705"," ChatGPT \uc694\uc57d"]}),(0,t.jsx)(e.br,{}),"\n","\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h2,{id:"jdbc-java-database-connectivity",children:"JDBC (Java Database Connectivity)"}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"jdbc.jpg",src:a(7808).A+"",width:"996",height:"776"}),"\nJDBC\ub294 Java Application\uacfc DB \uc0ac\uc774\uc5d0 \uc5f0\uacb0\uc744 \uc704\ud55c \ud45c\uc900 API\uc774\ub2e4. JDBC\ub97c \ud1b5\ud574 \uac1c\ubc1c\uc790\ub294 DB\uc758 \uad6c\uccb4\uc801\uc778 \uc885\ub958\uc640 \uad00\uacc4 \uc5c6\uc774 \uc77c\uad00\ub41c \uc811\uadfc \ubc29\uc2dd\uc73c\ub85c DB\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4.\n\uc704 \uadf8\ub9bc\uc744 \ubcf4\uba74 \uc54c \uc218 \uc788\ub4ef\uc774 JDBC\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 JDBC \uad6c\ud604\uccb4\uc778 JDBC Driver\uac00 \ud544\uc694\ud558\uace0 \uac1c\ubc1c\uc790\ub294 Driver\uc758 \uc0ac\uc6a9\ubc95\uc740 \uc54c \ud544\uc694 \uc5c6\uc774 JDBC\ub97c \uc0ac\uc6a9\ud574 DB\uc5d0 \uc811\uadfc\ud558\uac8c \ub41c\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h3,{id:"1-drivermanager",children:"(1) DriverManager"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'private static Connection getConnection(String url, java.util.Properties info, Class<?> caller) throws SQLException {\n    ... \uc0dd\ub7b5\n\n    for (DriverInfo aDriver : registeredDrivers) {\n        // If the caller does not have permission to load the driver then\n        // skip it.\n        if (isDriverAllowed(aDriver.driver, callerCL)) {\n            try {\n                println("    trying " + aDriver.driver.getClass().getName());\n                Connection con = aDriver.driver.connect(url, info);\n                if (con != null) {\n                    // Success!\n                    println("getConnection returning " + aDriver.driver.getClass().getName());\n                    return (con);\n                }\n            } catch (SQLException ex) {\n                if (reason == null) {\n                    reason = ex;\n                }\n            }\n\n        } else {\n            println("    skipping: " + aDriver.driver.getClass().getName());\n        }\n\n    }\n\n    ... \uc0dd\ub7b5\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"DriverManager\ub294 JDBC Driver\ub4e4\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uac1d\uccb4\uc774\uace0 DriverManager\ub97c \ud1b5\ud574 DB Connection\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4.\n\uc704 \uba54\uc11c\ub4dc\ub294 DriverManager \uac1d\uccb4 \ub0b4\uc758 private static getConnection(...) \uba54\uc11c\ub4dc\ub85c public static getConnection(...)\uac00 \ucd5c\uc885\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uac8c \ub418\ub294 \uba54\uc11c\ub4dc\uc774\ub2e4.\n\ub85c\uc9c1\uc744 \uc0b4\ud3b4\ubcf4\uba74 \ub4f1\ub85d\ub41c Driver\ub4e4\uc744 \uc21c\ud68c\ud558\uba70 connection\uc744 \ub9fa\uc5b4\ubcf4\uace0 \uac00\uc7a5 \uba3c\uc800 \ub9fa\uc5b4\uc9c4 Connection\uc744 \ubc18\ud658\ud55c\ub2e4. (\uc5ec\ub7ec Driver\uac00 \ub4f1\ub85d\ub41c \uacbd\uc6b0)"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public static void main(String[] args) throws SQLException {\n    String url = "jdbc:mysql://localhost:3306/study_db";\n    String user = "root";\n    String password = "1234";\n\n    try (Connection connection = DriverManager.getConnection(url, user, password)) {\n\n        // \uc815\uc801 SQL \uc2e4\ud589\uc744 \uc704\ud55c \uac1d\uccb4\n        Statement statement = connection.createStatement();\n\n        // \uc9c8\uc758 \uacb0\uacfc \ud14c\uc774\ube14 \uac1d\uccb4\n        // \uc2e4\uc81c DB \uc9c8\uc758\ub3c4 ResultSet \uac1d\uccb4\uac00 \ud558\uac8c \ub41c\ub2e4. (\ub2e8\uc21c\ud788 \uc9c8\uc758 \uacb0\uacfc\ub97c \uac00\uc9c0\ub294 \uac1d\uccb4\uac00 \uc544\ub2d8)\n        ResultSet rs = statement.executeQuery("SELECT * FROM users");\n        while (rs.next()) {\n            System.out.println(rs.getString("name"));\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\uc55e\uc11c \uc0b4\ud3b4\ubd24\ub4ef\uc774 DriverManager\ub294 url, user, password\uac12\uc73c\ub85c DB Connection\uc744 \ub9fa\uc5b4\uc8fc\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4.\n\ud558\uc9c0\ub9cc \uc704 \ucf54\ub4dc\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\ub4ef\uc774 DriverManager\ub294 DB \uc5f0\uacb0\uc744 Util \ud074\ub798\uc2a4\uc5d0 \uac00\uae5d\ub2e4.\n\ub610\ud55c \ub9e4\ubc88 DB \uc811\uadfc\uc744 \uc704\ud574 Connection\uc744 \ub9fa\uace0 \ub04a\uc5b4\uc918\uc57c \ud55c\ub2e4\ub294 \uac83\ub3c4 DB \uc811\uadfc\uc774 \ube48\ubc88\ud55c Application \uc785\uc7a5\uc5d0\uc11c\ub294 \ud070 \ub0ad\ube44\uc77c \uac83\uc774\ub2e4.\n\uc2e4\uc81c\ub85c DriverManager.getConnection(url, user, password) \uc218\ud589\uc18d\ub3c4\ub97c \ud655\uc778\ud574\ubcf4\ub2c8 \ubd80\ubd84\uc758 10\ud68c \ud3c9\uade0\uc774 0.25\ucd08\uc600\ub2e4.\nAPI \uc694\uccad\uc5d0\uc11c DB \uc811\uadfc\uc744 \uc704\ud55c Connection \uc0dd\uc131\uc5d0 0.25\ucd08\ub97c \uc18c\ube44\ud55c\ub2e4\uba74 \uadf8 API\uc758 \uc131\ub2a5\uc740.. \ub354 \ub9d0\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub420 \uac83 \uac19\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h3,{id:"2-datasource",children:"(2) DataSource"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public interface DataSource  extends CommonDataSource, Wrapper {\n\n  Connection getConnection() throws SQLException;\n\n  Connection getConnection(String username, String password)\n    throws SQLException;\n    \n  ... \uc0dd\ub7b5\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Datasource\ub294 DB Connection\uc744 \uc0dd\uc131\ud558\ub294 \ud329\ud1a0\ub9ac\uc774\ub2e4.\nDriverManager\uc758 \ub300\uc548\uc73c\ub85c \ud0c4\uc0dd\ud588\uace0 DB Connection\uc744 \ud68d\ub4dd\ud558\uae30 \uc704\ud55c \uba54\uc11c\ub4dc\ub4e4\uc774 \uc815\uc758\ub418\uc5b4 \uc788\ub2e4.\nJDBC\uc5d0\uc11c\ub294 \ub530\ub85c \uad6c\ud604\uccb4\ub97c \uc81c\uacf5\ud558\uc9c0\ub294 \uc54a\ub294\ub2e4. \ub54c\ubb38\uc5d0 \uac1c\ubc1c\uc790\ub294 DataSource\uc758 \uc5ec\ub7ec \uad6c\ud604\uccb4 \uc911 \uc6d0\ud558\ub294 \uac78 \uc0ac\uc6a9\ud574 DB \uc811\uadfc \ubc29\uc2dd\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h2,{id:"hikaricp",children:"HikariCP"}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"Spring Boot uses the following algorithm for choosing a specific implementation:\n\n1. We prefer HikariCP for its performance and concurrency. If HikariCP is available, we always choose it.\n2. Otherwise, if the Tomcat pooling DataSource is available, we use it.\n3. Otherwise, if Commons DBCP2 is available, we use it.\n4. If none of HikariCP, Tomcat, and DBCP2 are available and if Oracle UCP is available, we use it.\n\n(https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.sql.datasource)\n"})}),"\n",(0,t.jsx)(e.p,{children:"HikariCP\ub294 \uace0\uc131\ub2a5 JDBC Connection Pool\uc774\uc790 Java \uc9c4\uc601\uc5d0\uc11c DB Connection Pool\uc744 \uc0ac\uc6a9\ud560 \ub54c \uac00\uc7a5 \uba3c\uc800 \uace0\ub824\ub418\ub294 library\uc774\ub2e4.\n\uc704 \uae00\uc740 spring boot \uacf5\uc2dd \ubb38\uc11c\uc778\ub370 Default DataSource\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 HikariCP\uc774\ub2e4. 1\ubc88 \uae00\ub9cc \uc77d\uc5b4\ubd10\ub3c4 HikariCP\ub97c \uc5bc\ub9c8\ub098 \uc2e0\ub8b0\ud558\ub294 \uc9c0\ub97c \uc54c \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public static void main(String[] args) throws SQLException {\n    HikariConfig config = new HikariConfig();\n    config.setJdbcUrl("jdbc:mysql://localhost:3306/study_db");\n    config.setUsername("root");\n    config.setPassword("1234");\n\n    try (HikariDataSource ds = new HikariDataSource(config)) {\n        Connection connection = ds.getConnection();\n\n        // \uc815\uc801 SQL \uc2e4\ud589\uc744 \uc704\ud55c \uac1d\uccb4\n        Statement statement = connection.createStatement();\n        \n        // \uc9c8\uc758 \uacb0\uacfc \ud14c\uc774\ube14 \uac1d\uccb4\n        // \uc2e4\uc81c DB \uc9c8\uc758\ub3c4 ResultSet \uac1d\uccb4\uac00 \ud558\uac8c \ub41c\ub2e4. (\ub2e8\uc21c\ud788 \uc9c8\uc758 \uacb0\uacfc\ub97c \uac00\uc9c0\ub294 \uac1d\uccb4\uac00 \uc544\ub2d8)\n        ResultSet rs = statement.executeQuery("SELECT * FROM users");\n        while (rs.next()) {\n            System.out.println(rs.getString("name"));\n        }\n\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\uba3c\uc800 HikariCP \uc0ac\uc6a9 \ucf54\ub4dc\ubd80\ud130 \uc0b4\ud3b4\ubcf4\uc790. \uc774\ub984\uc5d0\uc11c\ub3c4 \uc54c \uc218 \uc788\ub4ef\uc774 HikariCP\ub294 DataSource \uad6c\ud604\uccb4\uc778 HikariDataSource\ub97c \uc81c\uacf5\ud55c\ub2e4.\nHikariDataSource\ub294 DataSource\uc758 \uad6c\ud604\uccb4\uc774\uc9c0\ub9cc \ucd94\uac00\uc801\uc73c\ub85c Closeable \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uace0 \uc788\uae30\ub3c4 \ud558\ub2e4. \ub54c\ubb38\uc5d0 \uc704 \ucf54\ub4dc\ucc98\ub7fc try with resource \uad6c\ubb38\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\nHikariCP\ub294 \uc2a4\uc2a4\ub85c\ub97c \ube60\ub974\ub2e4\uace0 \uc18c\uac1c\ud558\ub294\ub370 \uc815\ub9d0 \ube60\ub978 \uac78\uae4c? 10\ubc88\uc744 \uc2e4\ud589\ud574\ubd24\uc744 \ub54c Connection connection = ds.getConnection()\uc758 \uc218\ud589 \uc2dc\uac04\uc740 \ud3c9\uade0 1 MilliSecond\uc774\ub2e4.\n\uc774\ub294 DriverManager\ub97c \uc0ac\uc6a9\ud588\uc744 \ub54c\ubcf4\ub2e4 250\ubc30 \ube68\ub77c\uc9c4 \uc218\uce58\uc774\ub2e4. \uc5b4\ub5bb\uac8c HikariCP\ub294 DriverManager\uc5d0 \ube44\ud574 250\ubc30 \ube60\ub978 \uc131\ub2a5\uc744 \ub0bc \uc218 \uc788\ub294 \uac83\uc77c\uae4c?"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h3,{id:"1-pooling-\uae30\ubc95",children:"(1) Pooling \uae30\ubc95"}),"\n",(0,t.jsx)(e.p,{children:"HikariCP\uc758 CP\ub294 Connection Pool\uc758 \uc57d\uc5b4\uc774\ub2e4. \ub9d0 \uadf8\ub300\ub85c Connection\uc744 \ubbf8\ub9ac \uc0dd\uc131\ud574\ub450\uace0 Pool\uc5d0 \ubcf4\uad00\ud55c \ud6c4 \ud544\uc694\ud560 \ub54c \uaebc\ub0b4\uc11c \uc4f0\ub294 \ubc29\uc2dd\uc774\ub2e4.\n\uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 DriverManger\ub97c \ud65c\uc6a9\ud574 \ud544\uc694\uc2dc\uc5d0 DB\uc640 Connection\uc744 \uc0dd\uc131\ud558\uace0 \uc0ac\uc6a9 \ud6c4 Connection\uc744 \ub2eb\ub294 \ubc29\uc2dd\uc5d0 \ube44\ud574 \uc131\ub2a5\uacfc \uc790\uc6d0 \uc0ac\uc6a9 \uce21\uba74\uc5d0\uc11c \ubaa8\ub450 \ud6a8\uc728\uc801\uc774\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h3,{id:"2-delegates-\ucd5c\uc801\ud654",children:"(2) Delegates \ucd5c\uc801\ud654"}),"\n",(0,t.jsxs)(e.p,{children:["\ub300\ub2e4\uc218\uc758 \uc0ac\ub78c\ub4e4\uc774 HikariCP\uac00 \uace0\uc131\ub2a5\uc778 \uc774\uc720\ub294 Pooling \uae30\ubc95\uc5d0 \uc788\ub2e4\uace0 \uc0dd\uac01\ud560 \uac83\uc774\uace0 \uc774\ub294 \ud2c0\ub9b0 \ub9d0\uc740 \uc544\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \ub2e4\ub978 Connection Pool \uae30\ubc18\uc758 DataSource\uc640 \ube44\uad50\ud588\uc744 \ub54c\uc5d0\ub3c4 HikariCP\uac00 \ub6f0\uc5b4\ub098\ub2e4\ub294 \uac74 \ub2e4\ub978 \uc774\uc720\ub4e4\ub3c4 \ubd84\uba85 \uc788\ub2e4\ub294 \ub73b\uc77c \uac83\uc774\ub2e4.\n",(0,t.jsx)(e.a,{href:"https://github.com/brettwooldridge/HikariCP/wiki/Down-the-Rabbit-Hole",children:"Down the Rabbit Hole"})," \uae00\uc5d0\uc11c\ub294 HikariCP\uac00 \uc5b4\ub5bb\uac8c \uace0\uc131\ub2a5\uc744 \ub2ec\uc131\ud588\ub294\uc9c0 \uc124\uba85\ud574\uc8fc\uba70\nConnection, Statement \ub4f1\uc744 \uac10\uc2fc Delegates\uc758 \ucd5c\uc801\ud654\uac00 \ud070 \uc5ed\ud560\uc744 \ud55c\ub2e4\uace0 \ub9d0\ud55c\ub2e4. \uac04\ub2e8\ud55c \uc608\uc2dc\ub85c ConnectionProxy\ub294 ArrayList<Statement> \uac1d\uccb4\ub97c \uac00\uc9c0\uace0 \uc788\ub294\ub370 Statement\ub97c \uc0dd\uc131\ud558\uace0 ArrayList\uc5d0 \ub2f4\uc740 \ud6c4 \uc0ac\uc6a9 \ud6c4\uc5d0\ub294 \uc81c\uac70\ub97c \ud574\uc8fc\uac8c \ub41c\ub2e4.\n\uc774\ub54c remove() \uba54\uc11c\ub4dc\ub294 Head to tail \uc21c\uc11c\ub85c \uc6d0\uc18c\ub97c \ucc3e\ub294\ub2e4. \ud558\uc9c0\ub9cc \ub300\uac1c \uc0ac\uc6a9 \uc9c1\ud6c4 Statement\uac00 \uc81c\uac00\ub41c\ub2e4\ub294 \uac83\uc744 remove()\ub97c Tail to head \uc21c\uc11c\ub85c \uad6c\ud604\ud55c FastList \uc790\ub8cc \uad6c\uc870\ub97c \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud55c\ub2e4\uace0 \ud55c\ub2e4.\n\uc774\ub7ec\ud55c \ucd5c\uc801\ud654\ub294 \ud070 \uc131\ub2a5 \uac1c\uc120\uc740 \uc544\ub2c8\ub77c \ub9d0\ud558\uc9c0\ub9cc \uc774\uc815\ub3c4 \uc218\uc900\uc744 \uc2dc\uc791\uc73c\ub85c JIT \ucef4\ud30c\uc77c\ub7ec\ub97c \uc798 \ud65c\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ubc14\uc774\ud2b8\ucf54\ub4dc \uc218\uc900\uc758 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\uae4c\uc9c0 \uc801\uc6a9\ub418\uc5b4 \uace0\uc131\ub2a5\uc744 \ub2ec\uc131\ud588\ub2e4\uace0 \uc124\uba85\ud574\uc900\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h2,{id:"\uc815\ub9ac",children:"\uc815\ub9ac"}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"Spring Data JPA\ub098 Spring Data JDBC\ucc98\ub7fc \uac1c\ubc1c\uc790\uac00 \ud3b8\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uac1c\ubc1c\uc744 \ud558\ub2e4 \ubcf4\ub2c8 DB Connection\uacfc \uadf8 \uc8fc\ubcc0\ubd80\uc5d0 \ub300\ud574 \uc0dd\uac01\ud558\uc9c0 \uc54a\uace0 \uac1c\ubc1c\uc744 \ud574\uc654\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e0\ub2e4.\n\uac8c\ub2e4\uac00 \ud68c\uc0ac \uc6b4\uc601\uc5d0\uc11c DB Connection\uacfc \uad00\ub828\ud55c \ubb38\uc81c \uc0c1\ud669\uc744 \uacaa\uc5b4\ubcf4\uc9c0 \ubabb\ud574 \ub354 \uc2e0\uacbd\uc744 \ubabb\uc37c\ub358 \uac83 \uac19\ub2e4.\n\ud558\uc9c0\ub9cc JDBC, DataSource, HikariCP\ub77c\ub294 DB \uc811\uadfc\uc758 \uae30\ubc18 \uae30\uc220\uc744 \uc54c\uc544\ubcf4\uace0 \ub098\ub2c8 \uac1c\ubc1c\ud588\ub358 API\ub4e4\uc758 \ub3d9\uc791\uc744 \uc880 \ub354 \uc138\ubc00\ud558\uac8c \uc54c\uac8c\ub41c \uac83 \uac19\uc544 \uc88b\uc558\uace0, \ubb34\uc5c7\ubcf4\ub2e4 \ubb38\uc81c\uac00 \uc0dd\uacbc\uc744 \ub584 \ud574\uacb0 \uacfc\uc815\uc5d0\uc11c \ud070 \ud798\uc774\ub418\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4."})]})}function D(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},7808:(n,e,a)=>{a.d(e,{A:()=>t});const t=a.p+"assets/images/jdbc-368de0bc4138cba5970c42a724e5fafd.jpg"},8453:(n,e,a)=>{a.d(e,{R:()=>o,x:()=>s});var t=a(6540);const r={},i=t.createContext(r);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);