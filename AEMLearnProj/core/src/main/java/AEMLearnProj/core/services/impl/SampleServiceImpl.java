package AEMLearnProj.core.services.impl;

import org.osgi.framework.BundleContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import AEMLearnProj.core.services.SampleService;

@Component(
		service = { SampleService.class },
		immediate = true,
		property = { "service.description=" + "AlertStyleService component service implementation" },
		configurationPolicy = ConfigurationPolicy.OPTIONAL)

public class SampleServiceImpl implements SampleService{
	
	/** Default Logger */
	private final Logger LOGGER = LoggerFactory.getLogger(SampleServiceImpl.class);
	
	private BundleContext bundle;

	@Activate
	public void Activate(BundleContext bundle) {
		this.bundle = bundle;
	}
	
	@Override
	public String getBundleInfo() {
		return bundle.getBundle().getLocation();
	}
	
}
