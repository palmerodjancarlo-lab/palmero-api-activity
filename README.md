# RESTful API Activity - [Your Name]
## Best Practices Implementation
**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
  
- Answer: 
- We put `BASE_URI` in `.env` to separate configuration from code, making the application more flexible, secure, and easier to deploy across different environments without changing the source code.
  
**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/dishes`) for our routes?
- Answer:
- We use plural nouns like `/dishes` because it follows the RESTful API conventions. This makes the API more intuitive, predictable and align with standard practices.
**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?
- Why is it important to return `404` instead of just an empty array or a generic error?
- Answer: 
- `201 Created` is used when resource is successfully created (POST), while `200 OK` is used for successful GET, PUT, or DELETE operations.
  
- It is important t return `404` instead of an empty array or generic error is important because it provides clear, specific information to the client that the requested resource doesn't exist, following HTTP standards and making debugging easier.
**4. Testing:**

- ![alt text](image.png)