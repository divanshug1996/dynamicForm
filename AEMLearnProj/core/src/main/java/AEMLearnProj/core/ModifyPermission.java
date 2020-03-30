package AEMLearnProj.core;

import java.util.NoSuchElementException;

import javax.jcr.Session;
import javax.jcr.security.AccessControlList;
import javax.jcr.security.AccessControlManager;
import javax.jcr.security.Privilege;

import org.apache.jackrabbit.api.JackrabbitSession;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.jackrabbit.commons.jackrabbit.authorization.AccessControlUtils;
import org.apache.sling.jcr.api.SlingRepository;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Component(immediate=true)
public class ModifyPermission {

	private static final Logger LOGGER = LoggerFactory.getLogger(ModifyPermission.class);
	
	@Reference
	private SlingRepository repository;
	
	@Activate
	protected void activate() {
		LOGGER.info("Modifyy Permissions activated:");
		modifyPermissions();
	}
	
	private void modifyPermissions() {
		LOGGER.info("inside activate modify");
		Session adminSession = null;
		try {
			adminSession = repository.loginService("subserviceuser", repository.getDefaultWorkspace());
			LOGGER.info("user id is");
			LOGGER.info(adminSession.getUserID());
			UserManager userMgr =((JackrabbitSession)adminSession).getUserManager();
			AccessControlManager accessControlManager = adminSession.getAccessControlManager();
			Authorizable denyAccess = userMgr.getAuthorizable("divig");
			AccessControlList acl = null;
			
			try {
				acl = AccessControlUtils.getAccessControlList(adminSession, "/content/we-retail/us/en");
			}catch(NoSuchElementException e) {
				LOGGER.error("error obtaining acl in modify permissions method {}",e);
			}
			
			Privilege[] privileges = {
					accessControlManager.privilegeFromName(Privilege.JCR_READ)
			};
			acl.addAccessControlEntry(denyAccess.getPrincipal(), privileges);
			accessControlManager.setPolicy("/content/we-retail/us/en", acl);
			adminSession.save();
		}catch(Exception e) {
			LOGGER.error("Exception in modify permission module",e);
		}finally {
			if (adminSession!=null) {
				adminSession.logout();
			}
		}
	}
	
}
