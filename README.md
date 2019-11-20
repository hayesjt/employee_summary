# employee_summary
An application that takes data from a manager and generates a team information sheet based on input.

# In-Depth Summary:

This application allows a manager to input information about their team such as GitHub profile, email, number, and other important information they need to know on a daily basis and generates an HTML page with all this information so they can always have it on hand if they need anything. This may also be nice so they can look at who they are all managing and who they can use for specific projects.

# Order of Operations:

# 1:
    First the manager will be asked to enter their information so the HTML page can show who owns the team and what their contact is.

# 2:
    The application will them ask the manager if they would like to add an intern or engineer to their team summary. Depending on what they will pick step 3 will be diffrent.

# 3A:
    If Intern is selected it will ask for the following information:
        1: Name
        2: Employee ID#
        3: Email
        4: Work phone #
        5: Length on internship

# 3B:
    If Engineer is selected it will ask for the following information:
        1: Name
        2: Employee ID#
        3: Email
        4: Work Phone #
        5: GitHub Profile

# 4:
    Once this is completed the application will ask if they would like to add anymore people - if not the application will then move onto the next step instead of repeating step 3.

# 5:
    Once the application stops asking questions and the manager has entered in all the employees they wanted it will then take this data and make an HTML page of all this information. Note the manager and their employees have an easy place to go and find contact information. This can be used for all teams at a company and be updated whenever they would like.
# end of steps

# file structure
    1: folders / files
        A: lib
            a) CSS
        B: output
            a) final product (HTML page created)
        C: templates
            a) HTML templates
        D: test
            a) all test.js files to check application files
        E: app.js 

# required modules
    Inquirer
    Jest
    FS
